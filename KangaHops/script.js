let character = document.getElementById("character");
let obstacles = document.getElementById("obstacles");
let scoreSpan = document.getElementById("scorer");
let timerSpan = document.getElementById("timer");

let score = 0;
let isJumping = false;
let gameOver = false;
let gameTime = 0;
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




