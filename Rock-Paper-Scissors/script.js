document.addEventListener("DOMContentLoaded", function () {
    // Initialize variables for various DOM elements
    const viewPlay = document.querySelector(".view-play");
    const loadingScreen = document.querySelector("#loading-screen");
    const viewRules = document.querySelector(".view-rules");
    const closeRuleButton = document.getElementById("close");
    const mobileCloseButton = document.getElementById("mobile-close");
    const rulesButton = document.getElementById("rules");
    const playButtons = document.querySelectorAll(".play-btn");
    const viewResult = document.getElementById("view-result");
    const resultText = document.getElementById("result");
    const playerPoints = document.getElementById("player-points");
    const computerPoints = document.getElementById("computer-points");
    const playAgainButton = document.getElementById("playagin");

    // Hide the main play view and show loading screen initially
    viewPlay.style.display = "none";
    setTimeout(function () {
        loadingScreen.style.opacity = "0";
        setTimeout(function () {
            loadingScreen.style.display = "none";
            viewRules.style.display = "flex";
        }, 500);
    }, 4000);

    // Add event listeners for closing rules
    closeRuleButton.addEventListener("click", toggleRules);
    mobileCloseButton.addEventListener("click", toggleRules);

    // Add event listener for showing rules
    rulesButton.addEventListener("click", showRules);

    // Add event listeners for play buttons
    playButtons.forEach(function (button) {
        button.addEventListener("click", playGame);
    });

    // Add event listener for play-again button
    playAgainButton.addEventListener("click", playAgain);

    // Function to toggle visibility of rules
    function toggleRules() {
        viewRules.style.display = "none";
    }

    // Function to show rules
    function showRules() {
        viewRules.style.display = "flex";
    }

    // Function to handle gameplay
    function playGame(event) {
        const bgPentagon = document.querySelector(".bg-pentagon");
        bgPentagon.style.animation = "rotateFadeOut 1s forwards";

        viewRules.style.display = "none";

        const playerChoice = event.currentTarget.id;
        const computerChoice = generateComputerChoice();

        displayChoices(playerChoice, computerChoice);

        const result = determineWinner(playerChoice, computerChoice);

        viewResult.style.display = "flex";
        resultText.innerText = result;

        clearHighlights();

        setTimeout(() => {
            if (result === "You Win! 😁") {
                playerPoints.innerText = parseInt(playerPoints.innerText) + 1;
                document.getElementById("player").classList.add("win-animation");
            } else if (result === "You Lose! 😓") {
                computerPoints.innerText = parseInt(computerPoints.innerText) + 1;
                document.getElementById("computer").classList.add("win-animation");
            }
        }, 1000);

        setTimeout(() => {
            bgPentagon.style.display = "none";
            viewPlay.style.display = "flex";
        }, 1000);
    }


    // Function to update scores
    function updateScores(result) {
        if (result === "You Win! 😁") {
            playerPoints.innerText = parseInt(playerPoints.innerText) + 1;
        } else if (result === "You Lose! 😓") {
            computerPoints.innerText = parseInt(computerPoints.innerText) + 1;
        }
    }

    // Function to generate computer choice
    function generateComputerChoice() {
        const choices = ["rock", "paper", "scissors", "lizard", "spock"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Function to display player and computer choices
    function displayChoices(playerChoice, computerChoice) {
        document.getElementById("player").innerHTML = `<button class="play-btn ${playerChoice}"><img src="img/icon-${playerChoice}.svg" alt="${playerChoice}"></button>`;
        document.getElementById("computer").innerHTML = `<button class="play-btn ${computerChoice}"><img src="img/icon-${computerChoice}.svg" alt="${computerChoice}"></button>`;
    }

    // Function to clear win highlights
    function clearHighlights() {
        document.getElementById("player").classList.remove("win-animation");
        document.getElementById("computer").classList.remove("win-animation");
    }

    // Function to determine the winner
    function determineWinner(playerChoice, computerChoice) {
        if (
            (playerChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
            (playerChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
            (playerChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
            (playerChoice === "lizard" && (computerChoice === "spock" || computerChoice === "paper")) ||
            (playerChoice === "spock" && (computerChoice === "scissors" || computerChoice === "rock"))
        ) {
            return "You Win! 😁";
        } else if (playerChoice === computerChoice) {
            return "It's a Draw! 😝";
        } else {
            return "You Lose! 😓";
        }
    }

    // Function to reset the game
    function playAgain() {
        viewPlay.style.display = "none";
        viewResult.style.display = "none";

        const bgPentagon = document.querySelector(".bg-pentagon");
        bgPentagon.style.animation = "";
        bgPentagon.style.opacity = "1";
        bgPentagon.style.display = "block";
    }

});
