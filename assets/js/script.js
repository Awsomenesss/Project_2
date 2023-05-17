const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");
const resetBtn = document.getElementById('reset');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const maxClicksElement = document.getElementById('maxClicks');

let result = "";
let playerChoice = "";
let compChoice = "";
let choices = ["rock", "paper", "scissors", "lizard", "spock"];
let maxClicks = 1;
let currentClicks = 0;
let gameEnded = false;


rock.addEventListener("click", function () {
    if (!gameEnded) {
        whoWins("Rock");
    }
});
paper.addEventListener("click", function () {
    if (!gameEnded) {
        whoWins("Paper");
    }
});
scissors.addEventListener("click", function () {
    if (!gameEnded) {
        whoWins("Scissors");
    }
});
lizard.addEventListener("click", function () {
    if (!gameEnded) {
        whoWins("Lizard");
    }
});
spock.addEventListener("click", function () {
    if (!gameEnded) {
        whoWins("Spock");
    }
});

incrementBtn.addEventListener('click', function () {
    if (maxClicks < 10) {
        maxClicks++;
        maxClicksElement.innerText = maxClicks;
    }
});

decrementBtn.addEventListener('click', function () {
    if (maxClicks > 1) {
        maxClicks--;
        maxClicksElement.innerText = maxClicks;
    }
});

function whoWins(playerChoice) {
    compChoice = decideCompChoice();
    playerChoice = playerChoice.toLowerCase();

    if (currentClicks >= maxClicks) {
        determineResult();
    } else {
        if (playerChoice === compChoice) {
            result = "Draw!";
        } else {
            if (playerChoice === "rock" && (compChoice === "scissors" || compChoice === "lizard")) {
                result = "Win!";
            } else if (playerChoice === "paper" && (compChoice === "rock" || compChoice === "spock")) {
                result = "Win!";
            } else if (playerChoice === "scissors" && (compChoice === "paper" || compChoice === "lizard")) {
                result = "Win!";
            } else if (playerChoice === "lizard" && (compChoice === "spock" || compChoice === "paper")) {
                result = "Win!";
            } else if (playerChoice === "spock" && (compChoice === "scissors" || compChoice === "rock")) {
                result = "Win!";
            } else {
                result = "Loss!";
            }
        }
        currentClicks++;
        results(result, playerChoice, compChoice);
    }
}

function decideCompChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function results(result, playerChoice, compChoice) {
    if (result === "Win!") {
        playerScore();
    } else if (result === "Loss!") {
        compScore();
    }

    showPlayerScore(playerChoice);
    showCompScore(compChoice);

    if (currentClicks >= maxClicks) {
        determineResult();
    } else {
        result = "";
    }
}

function showPlayerScore(playerChoice) {
    document.getElementById("players-choice").innerHTML = `<button class="btn ${playerChoice.toLowerCase()}"><i class="far fa-hand-${playerChoice.toLowerCase()}"></i></button>`;
}

function showCompScore(compChoice) {
    document.getElementById("comp-choice").innerHTML = `<button class="btn ${compChoice.toLowerCase()}"><i class="far fa-hand-${compChoice.toLowerCase()}"></i></button>`;
}
    
    function playerScore() {
    let playerScore = parseInt(document.getElementById("wins").innerText);
    playerScore++;
    document.getElementById("wins").innerText = playerScore;
    }
    
    function compScore() {
    let compScore = parseInt(document.getElementById("losses").innerText);
    compScore++;
    document.getElementById("losses").innerText = compScore;
    }
    
    function determineResult() {
    let playerScore = parseInt(document.getElementById("wins").innerText);
    let compScore = parseInt(document.getElementById("losses").innerText);
    if (playerScore > compScore) {
    result = "You Win!";
    } else if (playerScore < compScore) {
    result = "You Lose!";
    } else {
    result = "It's a Draw!";
    }
    document.getElementById("result").innerText = result;
    gameEnded = true;
    currentClicks = 0;
    }
    
    resetBtn.addEventListener('click', function () {
    document.getElementById("wins").innerText = '0';
    document.getElementById("losses").innerText = '0';
    document.getElementById("result").innerText = '';
    gameEnded = false;
    currentClicks = 0;
    });
    
    maxClicksElement.innerText = maxClicks;
