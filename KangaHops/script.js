// Variables to track game state
let gameStarted = false;
let gameOver = false;
let score = 0;
let time = 0;
let timerInterval;
let obstacleInterval;

// Audio setup
const jumpSound = new Audio('media/jump.mp3');
const collisionSound = new Audio('media/collision.mp3');

// Function to handle character hops
function hops() {
    if (!gameStarted || gameOver) return;

    jumpSound.play();
    document.getElementById('character').classList.add('hop');
    setTimeout(() => {
        document.getElementById('character').classList.remove('hop');
    }, 500);
    score++; // Increment score on successful jump
    document.getElementById('score').textContent = score;
}

// Function to start the game
function startGame() {
    gameStarted = true;
    document.getElementById('countdown').style.display = 'block';

    let countdown = 3;
    const countdownInterval = setInterval(() => {
        document.getElementById('countdown').textContent = countdown;
        countdown--;
        if (countdown < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').style.display = 'none';
            startTimer();
            startObstacleMovement();
        }
    }, 1000);
}

// Function to start the timer
function startTimer() {
    timerInterval = setInterval(() => {
        time++;
        document.getElementById('timer').textContent = time;
    }, 1000);
}

// Function to start moving obstacles
function startObstacleMovement() {
    obstacleInterval = setInterval(() => {
        // Move obstacles
        const obstacles = document.querySelectorAll('.obstacle');
        obstacles.forEach((obstacle) => {
            obstacle.style.left = parseInt(obstacle.style.left) - 10 + 'px';

            // Check for collision
            const character = document.getElementById('character');
            const characterRect = character.getBoundingClientRect();
            const obstacleRect = obstacle.getBoundingClientRect();

            if (
                characterRect.bottom >= obstacleRect.top &&
                characterRect.top <= obstacleRect.bottom &&
                characterRect.right >= obstacleRect.left &&
                characterRect.left <= obstacleRect.right
            ) {
                handleCollision();
            }
        });
    }, 50);
}

// Function to handle collision
function handleCollision() {
    clearInterval(timerInterval);
    clearInterval(obstacleInterval);
    gameOver = true;
    collisionSound.play();
    document.getElementById('playagain').style.display = 'block';
}

// Event listeners
document.getElementById('character').addEventListener('click', hops);
document.getElementById('playagain').addEventListener('click', () => {
    location.reload(); // Reload the page to play again
});

// Start the game when the page loads
window.onload = startGame;
