let player = document.getElementById('player');
let platforms = Array.from(document.getElementsByClassName('platform'));
let gameArea = document.getElementById('gameArea');

let vy = 0; // Vertical speed
let gravity = 0.88; // Gravity
let canJump = false; // Prevents jumping in mid-air
let playerSpeed = 5; // Horizontal movement speed

let rightPressed = false; // Is the right arrow key being pressed?
let leftPressed = false; // Is the left arrow key being pressed?
let downPressed = false; // Is the down arrow key being pressed?

player.style.top = '0px'; // Initial top position
player.style.left = '0px'; // Initial left position

// Game loop
setInterval(() => {
    // Apply gravity
    vy += gravity;

    // Apply horizontal movement
    let newPosX = parseInt(player.style.left);
    if (rightPressed) newPosX += playerSpeed;
    if (leftPressed) newPosX -= playerSpeed;

    // Bound checks for the player to not leave the game area
    if (newPosX < 0) newPosX = 0;
    if (newPosX > gameArea.offsetWidth - player.offsetWidth) newPosX = gameArea.offsetWidth - player.offsetWidth;

    // Check collision with platforms
    let collisionDetected = false;
    for (let platform of platforms) {
        let platformBounds = platform.getBoundingClientRect();
        let playerBounds = player.getBoundingClientRect();

        // If player would collide with platform in the next frame...
        if (
            playerBounds.left < platformBounds.right &&
            playerBounds.right > platformBounds.left &&
            playerBounds.bottom < platformBounds.top &&
            playerBounds.bottom + vy > platformBounds.top
        ) {
            if (!downPressed) {
                collisionDetected = true;
                vy = 0;
                canJump = true; // Allows jumping again when standing on a platform
                break;
            }
        }
    }

    // If no collision was detected, apply gravity
    let newPosY = parseInt(player.style.top) + (collisionDetected ? 0 : vy);

    // Prevent jumping too high
    if (newPosY > gameArea.offsetHeight - player.offsetHeight) {
        newPosY = gameArea.offsetHeight - player.offsetHeight;
        vy = 0;
        canJump = true; // Allows jumping again when touching the ground
    }

    player.style.top = `${newPosY}px`;  // Update player's vertical position after checking for collisions
    player.style.left = `${newPosX}px`;  // Update player's horizontal position after checking for collisions
}, 20);

// Event listeners for the arrow keys
document.addEventListener('keydown', function(event) {
    switch (event.code) {
        case 'ArrowUp':
            if (canJump) {
                vy = -15; // Change this for higher or lower jumps
                canJump = false;
            }
            break;
        case 'ArrowDown':
            downPressed = true;
            break;
        case 'ArrowRight':
            rightPressed = true;
            break;
        case 'ArrowLeft':
            leftPressed = true;
            break;
    }
});

document.addEventListener('keyup', function(event) {
    switch (event.code) {
        case 'ArrowDown':
            downPressed = false;
            break;
        case 'ArrowRight':
            rightPressed = false;
            break;
        case 'ArrowLeft':
            leftPressed = false;
            break;
    }
});
