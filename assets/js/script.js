//get the button elements and add event listener to them
const choice = document.getElementsByClassName("far");
const computerScore=document.getElementsByTagName("choice");
var computerChoiceDisplay = document.getElementById("computer_choice");
var userChoiceDisplay = document.getElementById("player_choice");
var resultDisplay = document.getElementById("result_display");

var userScore = 0;

let computerLabel = document.getElementById("computer_label");
let playerLabel = document.getElementById("player_label");


var result;



    document.addEventListener("DOMContentLoaded", function() {
        let buttons = document.getElementsByTagName("choice");
    
        for (let button of buttons) {
            button.addEventListener("click", function() {
                let playerChoice = this.getAttribute("choice");
                playGame (playerChoice);
        });
    }
});
console.log(choice)


        
        
        //choice.id = choice;
        //choice.src = choice[i] + "far";
        //choice.addEventListener("click", selectChoice);
        //document.getElementById("choices").append(userChoiceDisplay);
    


function selectChoice(){
    you = this.id;
    document.getElementById("userScore").src = innerHTML + "far";}

    

// Generates computer choice


// Compares user and computer choice and calculates a winner


// Gets current computer score and increments by 1
function incrementComputerScore() {
    // Gets the current computer score from the DOM and increments it by 1
    let oldScore = computerScore.innerText;
    computerScore.innerText = ++oldScore;
    let newScore = computerScore.innerHTML;}
 

// Gets current user score and increments 1
function incrementUserScore() {
    // Gets the current player score from the DOM and increments it by 1
    let oldScore = userScore.innerText;
    userScore.innerText = ++oldScore;
    let newScore = userScore.innerHTML;}
