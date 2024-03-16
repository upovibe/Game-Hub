// let character = document.getElementById("character");
// let obstacles = document.getElementById("obstacles");
// let scoreSpan = document.getElementById("scorer");
// let timerSpan = document.getElementById("timer");

// let score = 0;
// let isJumping = false;
// let gameOver = false;
// let gameTime = 0;
// let intervalId;

// // Event listeners
// document.addEventListener("click", handleJump);
// document.addEventListener("keydown", handleKeyPress);

// function handleJump() {
//   if (!isJumping && !gameOver) {
//     character.classList.add("hop"); 
//     isJumping = true;

//     // Reset jump animation after completion
//     setTimeout(() => {
//       character.classList.remove("hop");
//       isJumping = false;
//     }, 500);
//   }
// }

// function handleKeyPress(event) {
//   if (event.code === "Space" && !isJumping && !gameOver) {
//     handleJump();
//   }
//   }

const character = document.getElementById('character');
const obstacles = document.getElementById('obstacles');
const scoreSpan = document.querySelector('.score span');
let score = 0;
let isJumping = false;

// Function to handle character jump animation
function jump() {
  if (!isJumping) {
    isJumping = true;
    character.classList.add('hop');
    setTimeout(() => {
      isJumping = false;
      character.classList.remove('hop');
    }, 500); // Adjust the duration (in milliseconds) as needed
  }
}

// Event listeners for clicks and spacebar press
document.addEventListener('click', jump);
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    jump();
  }
});

// Function to move obstacles (replace with your desired movement logic)
function moveObstacles() {
  obstacles.style.transform = `translateX(-10px)`; // Adjust movement speed as needed
  // Add logic to check if obstacles are off-screen and respawn them
}

// Function to update score
function updateScore() {
  score++;
  scoreSpan.textContent = score;
}

// Game loop (replace with your preferred implementation)
setInterval(() => {
  if (!isJumping) {
    updateScore(); // Update score every time the character isn't jumping
  }
  moveObstacles(); // Update obstacle position
  // Add logic to check for collisions between character and obstacles
}, 100); // Adjust the interval (in milliseconds) as needed

// Potential Collision Detection (using bounding box overlap)
// This is a basic example, you might want to refine it for better accuracy
function checkCollision() {
  const characterBox = character.getBoundingClientRect();
  const obstacleBox = obstacles.firstChild.getBoundingClientRect(); // Assuming the first child is the obstacle

  if (
    characterBox.right < obstacleBox.left ||
    characterBox.left > obstacleBox.right ||
    characterBox.bottom < obstacleBox.top ||
    characterBox.top > obstacleBox.bottom
  ) {
    // No collision
  } else {
    // Collision detected! Handle it here (e.g., end game, display message)
    console.log("Collision!"); // Replace with your desired collision handling logic
  }
}

// Add a check for collisions within the game loop or after each jump 
// (uncomment the following line to enable collision check after each jump)
// setInterval(checkCollision, 100); 
S