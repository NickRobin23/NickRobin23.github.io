const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const startButton = document.getElementById('start-button');
// const highScoreElement = document.getElementById('high-score');
const eatSound = document.getElementById('eat-sound');
const gameOverSound = document.getElementById('game-over-sound');

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
    startButton.classList.add('collapsed');
    setTimeout(() => {
      // startButton.style.display = 'none';
      // startButton.classList.remove('fade-out');
      // Adjust the container size to fit the game board
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

/**
 * Draws the snake on the game board.
 *
 * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
 * @param {Array<{x: number, y: number}>} snake - The array representing the snake.
 * @param {number} interpolation - The interpolation value.
 */
function drawSnake(ctx, snake, interpolation) {
  ctx.save();

  if (snake.length === 1) {
    // Draw a circle for the snake head if it's the only segment

    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'none';
    ctx.beginPath();
    ctx.arc(
      snake[0].x * tileSize + tileSize / 2, 
      snake[0].y * tileSize + tileSize / 2, 
      tileSize / 2, 
      0, 
      2 * Math.PI
    );
    ctx.fill();
    return;
  } 

  ctx.strokeStyle = 'green';
  ctx.lineWidth = tileSize;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
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
  eatSound.currentTime = 0;
  eatSound.play();
}

function playGameOverSound() {
  gameOverSound.currentTime = 0;
  gameOverSound.play();
}

function gameLoop() {
  if (!gameInProgress) return;

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
  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'none'
  drawCircle(ctx, food.x * tileSize + tileSize / 2, food.y * tileSize + tileSize / 2, tileSize / 2);

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
  if (score > highScore) {
    highScore = score;
    localStorage.setItem('highScore', highScore);
    highScoreElement.textContent = `High Score: ${highScore}`;
  }
  gameInProgress = false;
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
  ctx.fillText('You Lost', canvas.width / 2 - 70, canvas.height / 2 - 15);

  // Show "Click Start to play again" message
  ctx.fillStyle = 'black';
  ctx.font = '16px Arial';
  ctx.fillText('Click Start to play again', canvas.width / 2 - 100, canvas.height / 2 + 20);

  // Show the start button with a fade-in effect
  // startButton.classList.add('fade-out');
  // startButton.style.display = 'block';
  startButton.classList.remove('collapsed');
}
