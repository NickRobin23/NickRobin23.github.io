const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const startButton = document.getElementById('start-button');
const eatSound = document.getElementById('eat-sound');
const gameOverSound = document.getElementById('game-over-sound');

const foodImage = new Image();
foodImage.src = 'assets/food.png';
foodImage.onload = function() {
  // Draw the food with higher quality
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(foodImage, food.x * tileSize, food.y * tileSize, tileSize, tileSize);
};

const gridSize = 20;
const tileSize = canvas.width / gridSize;


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
 * Returns the offset of the eysa
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
startButton.addEventListener('click', () => {
  if (!gameInProgress) {
    gameInProgress = true;
    document.querySelectorAll('.collapsable').forEach(
      element => element.classList.add('collapsed')
    );
    setTimeout(() => {
    }, 1000);
    gameLoop();
  }
});

function updateDirection(event) {
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

  ctx.strokeStyle = 'green';
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

  // Draw a circle for the snake head if it's the only segment

  const headXCtr = snake[0].x * tileSize + tileSize / 2;
  const headYCtr = snake[0].y * tileSize + tileSize / 2;
  ctx.fillStyle = 'darkgreen';
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
    return
  }

  currentDirection = nextDirection;
  const velocity = velocityFromDirection(currentDirection);
  const head = {x: snake[0].x + velocity.x, y: snake[0].y + velocity.y};
  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score += 1;
    scoreElement.textContent = score;
    food = randomFoodPosition();
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
  
  ctx.fillStyle = '#ecf0f1';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw the snake
  drawSnake(ctx, snake);

  // Draw the food
  ctx.fillStyle = '#ecf0f1';
  ctx.drawImage(foodImage, food.x * tileSize, food.y * tileSize, tileSize, tileSize);

  setTimeout(gameLoop, 100);
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
  if (score > highScore) {
    highScore = score;
    highScoreElement.textContent = highScore;
  }
  snake = [{x: gridSize / 2, y: gridSize / 2}];
  currentDirection = 'none';
  nextDirection = 'none';
  food = randomFoodPosition();
  score = 0;
  scoreElement.textContent = score;

  // Show "You Lost" message
  ctx.fillStyle = 'black';
  ctx.font = '30px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('You Lost', canvas.width / 2, canvas.height / 2 - 15);

  // Show "Click Start to play again" message
  ctx.fillStyle = 'black';
  ctx.font = '16px Arial';
  ctx.fillText('Click Start to play again', canvas.width / 2, canvas.height / 2 + 20);

  document.querySelectorAll('.collapsable').forEach(
    element => element.classList.remove('collapsed')
  );
}
