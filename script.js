const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const startButton = document.getElementById('start-button');
// const highScoreElement = document.getElementById('high-score');

const gridSize = 20;
const tileSize = canvas.width / gridSize;

let snake = [{x: gridSize / 2, y: gridSize / 2}];
let velocity = {x: 0, y: 0};
let food = randomFoodPosition();
let score = 0;
// let highScore = 0;
let gameInProgress = false;
let highScoreElement = document.getElementById('high-score');
let highScore = localStorage.getItem('highScore') || 0;
highScoreElement.textContent = `High Score: ${highScore}`;

document.addEventListener('keydown', updateVelocity);
startButton.addEventListener('click', () => {
  if (!gameInProgress) {
    gameInProgress = true;
    startButton.classList.add('fade-out');
    setTimeout(() => {
      startButton.style.display = 'none';
      startButton.classList.remove('fade-out');
      // Adjust the container size to fit the game board
      document.querySelector('.game-container').style.height = '470px';
    }, 1000);
    gameLoop();
  }
});

function updateVelocity(event) {
  if (event.key === 'ArrowUp' && velocity.y === 0) velocity = {x: 0, y: -1};
  if (event.key === 'ArrowDown' && velocity.y === 0) velocity = {x: 0, y: 1};
  if (event.key === 'ArrowLeft' && velocity.x === 0) velocity = {x: -1, y: 0};
  if (event.key === 'ArrowRight' && velocity.x === 0) velocity = {x: 1, y: 0};
}

function randomFoodPosition() {
  let position;
  do {
    position = {x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize)};
  } while (snake.some(segment => segment.x === position.x && segment.y === position.y));
  return position;
}

function gameLoop() {
  if (!gameInProgress) return;

  const head = {x: snake[0].x + velocity.x, y: snake[0].y + velocity.y};
  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score += 1;
    scoreElement.textContent = score;
    food = randomFoodPosition();
  } else {
    snake.pop();
  }

  if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
    resetGame();
    return;
  }

  if (snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)) {
    resetGame();
    return;
  }

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw the snake
  ctx.fillStyle = 'green';
  snake.forEach(segment => {
    drawCircle(ctx, segment.x * tileSize + tileSize / 2, segment.y * tileSize + tileSize / 2, tileSize / 2);
  });

  // Draw the food
  ctx.fillStyle = 'red';
  drawCircle(ctx, food.x * tileSize + tileSize / 2, food.y * tileSize + tileSize / 2, tileSize / 2);

  setTimeout(gameLoop, 100);
}

// Add this function to draw circles
function drawCircle(ctx, x, y, radius) {
  ctx.beginPath();
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
  velocity = {x: 0, y: 0};
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
  startButton.classList.add('fade-in');
  setTimeout(() => {
    startButton.style.display = 'block';
    startButton.classList.remove('fade-in');
    // Restore the container size to show the start button
    document.querySelector('.game-container').style.height = '520px';
  }, 10);
}
