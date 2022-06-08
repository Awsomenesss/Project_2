var computerChoiceDisplay = document.getElementById("computer_choice");
var userChoiceDisplay = document.getElementById("user_choice");
var resultDisplay = document.getElementById("result_display");
var computerScore = 0;
var userScore = 0;

let computerLabel = document.getElementById("computer_label");
let playerLabel = document.getElementById("user_label");

var userChoice;
var computerChoice;
var result;

var choices = ["rock", "paper", "scissors","lizard","spock"];

window.onload = function() {
    for (let i = 0; i < 5; i++) {
        
        let choice = document.getElementsByClassName("btn_big");
        choice.id = choices[i];
        choice.src = choices[i] + "btn_big";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(userChoiceDisplay);
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("userScore").src = innerHTML + "btn_big";

    

// Generates computer choice


// Compares user and computer choice and calculates a winner


// Gets current computer score and increments by 1
function incrementComputerScore() {
    // Gets the current computer score from the DOM and increments it by 1
    let oldScore = computerScore.innerText;
    computerScore.innerText = ++oldScore;
    let newScore = computerScore.innerHTML;
 

// Gets current user score and increments 1
function incrementUserScore() {
    // Gets the current player score from the DOM and increments it by 1
    let oldScore = userScore.innerText;
    userScore.innerText = ++oldScore;
    let newScore = userScore.innerHTML;
