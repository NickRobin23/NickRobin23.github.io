const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const startButton = document.getElementById('start-button');
const eatSound = document.getElementById('eat-sound');
const gameOverSound = document.getElementById('game-over-sound');

const foodImage = new Image();
foodImage.src = 'assets/food.png';

const gridSize = 20;
const tileSize = canvas.width / gridSize;

let snakeColor = 'green';
let snakeHeadColor = 'darkgreen';

function updateSnakeColor(col) {
  snakeColor = col;
  
  // Make the snake head color a darker version of the selected color
  snakeHeadColor = darkenColor(col, 20); // Adjust this value as needed
}

function updateSnakeHeadColor(col) {
  snakeHeadColor = col;
}

function darkenColor(hex, lum) {
  hex = hex.replace(/^\s*#|\s*$/g, '');
  if (hex.length == 3) {
    hex = hex.replace(/(.)/g, '$1$1');
  }

  var rgb = "#", c, i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i*2,2), 16);
    c = Math.round(Math.min(Math.max(0, c + (c * lum) / -100), 255)).toString(16);
    rgb += ("00"+c).substr(c.length);
  }

  return rgb;
}


let tickIntervalMs = 100;

// 1: slowest (500ms)
  // 5: default (100ms)
  // 10: fastest (50ms)
let speedToTickInterval = {
  1: 200,
  2: 170,
  3: 140,
  4: 115,
  5: 100,
  6: 85,
  7: 70,
  8: 60,
  9: 55,
  10: 50
}

function updateSpeed(spd) {
  spd = Math.round(spd);
  if (spd < 1) {
    spd = 1;
  } else if (spd > 10) {
    spd = 10;
  }
  
  tickIntervalMs = speedToTickInterval[spd];
}

let snake = [{x: gridSize / 2, y: gridSize / 2}];

/**
 * The current direction of the snake.
 * @type {'up' | 'down' | 'left' | 'right' | 'none'}
 */
let currentDirection = 'none';
/**
 * The current direction of the snake.
 * @type {'up' | 'down' | 'left' | 'right' | 'none'}
 */
let nextDirection = 'none';

/**
 * Changes the direction of the snake.
 * @param {'up' | 'down' | 'left' | 'right' | 'none'} direction - The new direction of the snake.
 */
function velocityFromDirection(direction) {
  if (direction === 'up') return {x: 0, y: -1};
  if (direction === 'down') return {x: 0, y: 1};
  if (direction === 'left') return {x: -1, y: 0};
  if (direction === 'right') return {x: 1, y: 0};
  return {x: 0, y: 0};
}

/**
 * Returns the offset of the eyes
 * @param {'up' | 'down' | 'left' | 'right' | 'none'} direction - The new direction of the snake.
 */
function eyesOffsetFromDirection(direction) {
  if (direction === 'up') return [
    {x: -1, y: -0.5},
    {x: 1, y: -0.5}
  ];
  if (direction === 'down') return [
    {x: -1, y: 0.5},
    {x: 1, y: 0.5}
  ]
  if (direction === 'left') return [
    {x: -0.5, y: 1},
    {x: -0.5, y: -1}
  ];
  // if (direction === 'right') 
  return [
    {x: 0.5, y: 1},
    {x: 0.5, y: -1}
  ];
}

let food = randomFoodPosition();
let score = 0;
// let highScore = 0;
let gameInProgress = false;
let highScoreElement = document.getElementById('high-score');
let highScore = localStorage.getItem('highScore') || 0;
highScoreElement.textContent = `High Score: ${highScore}`;

document.addEventListener('keydown', updateDirection);
document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchmove', handleTouchMove);
startButton.addEventListener('click', () => {
  if (!gameInProgress) {
    gameInProgress = true;
    document.querySelectorAll('.collapsable').forEach(
      element => element.classList.add('collapsed')
    );
    gameLoop();
  }
});

function updateDirection(event) {
  if (gameInProgress) {
    switch (event.key) {
      case 'ArrowUp':
        if (currentDirection !== 'down') {
          nextDirection = 'up';
        }
        break;
      case 'ArrowDown':
        if (currentDirection !== 'up') {
          nextDirection = 'down';
        }
        break;
      case 'ArrowLeft':
        if (currentDirection !== 'right') {
          nextDirection = 'left';
        }
        break;
      case 'ArrowRight':
        if (currentDirection !== 'left') {
          nextDirection = 'right';
        }
        break;
    }
  }
}


function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
}

function handleTouchMove(event) {
  if (event.touches.length === 0) return;

  const touchX = event.touches[0].clientX;
  const touchY = event.touches[0].clientY;
  const deltaX = touchX - touchStartX;
  const deltaY = touchY - touchStartY;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    // horizontal swipe
    if (deltaX > 0 && currentDirection !== 'left') {
      nextDirection = 'right';
    } else if (deltaX < 0 && currentDirection !== 'right') {
      nextDirection = 'left';
    }
  } else {
    // vertical swipe
    if (deltaY > 0 && currentDirection !== 'up') {
      nextDirection = 'down';
    } else if (deltaY < 0 && currentDirection !== 'down') {
      nextDirection = 'up';
    }
  }
}

const soundButton = document.getElementById('soundButton');
let soundEnabled = true;

soundButton.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    soundButton.querySelector('img').src = 'game-photos/sound-on.png';
  } else {
    soundButton.querySelector('img').src = 'game-photos/sound-off.png';
  }
});

/**
 * Draws the snake on the game board.
 *
 * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
 * @param {Array<{x: number, y: number}>} snake - The array representing the snake.
 * @param {number} interpolation - The interpolation value.
 */
function drawSnake(ctx, snake, interpolation) {
  ctx.save();

  ctx.strokeStyle = snakeColor;
  ctx.lineWidth = tileSize;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  if (snake.length > 1) {
    ctx.beginPath();
    snake.forEach((segment, index) => {
      if (index === 0) {
        const velocity = velocityFromDirection(currentDirection);
        const x = segment.x * tileSize + tileSize / 2 + interpolation * velocity.x * tileSize;
        const y = segment.y * tileSize + tileSize / 2 + interpolation * segment.y * tileSize;
        ctx.moveTo(segment.x * tileSize + tileSize / 2, segment.y * tileSize + tileSize / 2);
      } else {
        ctx.lineTo(segment.x * tileSize + tileSize / 2, segment.y * tileSize + tileSize / 2);
      }
    });
    
    ctx.stroke();
  }

  // Draw a circle for the snake head

  const headXCtr = snake[0].x * tileSize + tileSize / 2;
  const headYCtr = snake[0].y * tileSize + tileSize / 2;
  ctx.fillStyle = snakeHeadColor;
  ctx.strokeStyle = 'none';
  ctx.beginPath();
  ctx.arc(
    headXCtr, 
    headYCtr,
    tileSize / 2, 
    0, 
    2 * Math.PI
  );
  ctx.fill();

  ctx.fillStyle = 'black';

  const eyesOffset = eyesOffsetFromDirection(currentDirection);
  for(const eyeOffset of eyesOffset) {
    ctx.beginPath();
    ctx.arc(
      headXCtr + tileSize / 4 * eyeOffset.x, 
      headYCtr + tileSize / 4 * eyeOffset.y,
      tileSize / 8,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }

  ctx.restore();
}

function randomFoodPosition() {
  let position;
  do {
    position = {x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize)};
  } while (snake.some(segment => segment.x === position.x && segment.y === position.y));
  return position;
}

function playEatSound() {
  if (soundEnabled) {
    eatSound.currentTime = 0;
    eatSound.play();
  }
}

function playGameOverSound() {
  if (soundEnabled) {
    gameOverSound.currentTime = 0;
    gameOverSound.play();
  }
}

function gameLoop() {
  if (!gameInProgress) {
    return;
  }

  // Define food here
  if (!food) {
    food = randomFoodPosition();
  }

  // Check if user input is available
  if (currentDirection !== 'none') {
    const velocity = velocityFromDirection(currentDirection);
    const head = {x: snake[0].x + velocity.x, y: snake[0].y + velocity.y};
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      score += 1;
      scoreElement.textContent = score;
      food = randomFoodPosition(); // re-position the food once eaten
      playEatSound(); // Play the eat sound
    } else {
      snake.pop();
    }

    if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
      playGameOverSound(); // play game over sound effect
      resetGame();
      return;
    }

    if (snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)) {
      playGameOverSound(); // play game over sound effect
      resetGame();
      return;
    }
  }

  ctx.fillStyle = '#ecf0f1';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw the snake
  drawSnake(ctx, snake);

  // Draw the food
  if (gameInProgress && food) {
    ctx.fillStyle = '#ecf0f1';
    ctx.drawImage(foodImage, food.x * tileSize, food.y * tileSize, tileSize, tileSize);
  }

  setTimeout(gameLoop, tickIntervalMs);
}

// Add this function to draw circles
function drawCircle(ctx, x, y, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
}

function resetGame() {
  gameInProgress = false;
  if (score > highScore) {
    highScore = score;
    localStorage.setItem('highScore', highScore);
    highScoreElement.textContent = `High Score: ${highScore}`;
  }
  snake = [{x: gridSize / 2, y: gridSize / 2}];
  currentDirection = 'none';
  nextDirection = 'none';

  // Set food to null here
  food = null;

  score = 0;
  scoreElement.textContent = score;

  // Show "You Lost" message
  ctx.fillStyle = '#34495e';
  ctx.font = 'bold 30px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('You Lost', canvas.width / 2, canvas.height / 2 - 15);

  // Show "Click Start to play again" message
  ctx.fillStyle = '#34495e';
  ctx.font = '16px Verdana';
  ctx.fillText('Click Start to play again', canvas.width / 2, canvas.height / 2 + 20);

  // Reset directions
  currentDirection = 'none';
  nextDirection = 'none';

  document.querySelectorAll('.collapsable').forEach(
    element => element.classList.remove('collapsed')
  );
}

