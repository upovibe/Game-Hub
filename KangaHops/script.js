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
// }

let character = document.getElementById("character");
let obstacles = document.getElementById("obstacles");
let scoreSpan = document.getElementById("scorer");
let timerSpan = document.getElementById("timer");

let score = 0;
let isJumping = false;
let gameOver = false;
let gameTime = 0;
let startTime;
let intervalId;

// Event listeners
document.addEventListener("click", handleJump);
document.addEventListener("keydown", handleKeyPress);

function handleJump() {
  if (!isJumping && !gameOver) {
    character.classList.add("hop");
    isJumping = true;

    // Reset jump animation after completion
    setTimeout(() => {
      character.classList.remove("hop");
      isJumping = false;
    }, 500);
  }
}

function handleKeyPress(event) {
  if (event.code === "Space" && !isJumping && !gameOver) {
    handleJump();
  }
}

function startGame() {
  startTime = Date.now(); // Get start time in milliseconds
  gameOver = false;
  score = 0;
  scoreSpan.textContent = score;
  timerSpan.textContent = "0.00";
  intervalId = setInterval(gameLoop, 30); // Start game loop (runs every 30ms)
}

function gameLoop() {
  if (gameOver) return; // Exit loop if game over

  // Update timer
  gameTime = (Date.now() - startTime) / 1000; // Elapsed time in seconds
  timerSpan.textContent = gameTime.toFixed(2);

  // Update obstacle position
  const obstacleX = obstacles.style.transform.slice(13, -4) * 1; // Get current X position
  obstacles.style.transform = `translateX(${obstacleX - 5}px)`; // Move left by 5px

  // Check for collision
  const characterRect = character.getBoundingClientRect();
  const obstacleRect = obstacles.getBoundingClientRect();
  if (checkCollision(characterRect, obstacleRect)) {
    gameOver = true;
    clearInterval(intervalId); // Stop game loop
    alert("Game Over!"); // Display game over message (optional)
  }

  // Check if obstacle has left the screen
  if (obstacleRect.right < 0) {
    obstacles.style.transform = 'translateX(0)'; // Reset obstacle position
    score++;
    scoreSpan.textContent = score;
  }
}

function checkCollision(rect1, rect2) {
  // Check for overlap on both x and y axes
  return (
    rect1.left < rect2.right &&
    rect1.right > rect2.left &&
    rect1.top < rect2.bottom &&
    rect1.bottom > rect2.top
  );
}

startGame(); // Start the game

