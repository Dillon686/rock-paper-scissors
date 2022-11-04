//declare variables
let playerWins = 0;
let playerLosses = 0;
let currentSelection = '';
let computerSelection = '';
const buttons = document.querySelectorAll('button');
const winText = document.querySelector('#wins');
const lossText = document.querySelector('#losses');
const results = document.querySelector('#output');

buttons.forEach(function (button){
  button.addEventListener('click', function (e) {
    currentSelection = button.id;
    computerSelection = getComputerChoice();
    
    output.textContent = playRound(currentSelection, computerSelection);

    //Will return to this later to add color to the buttons upon click
    /*if (currentSelection === computerSelection){
        button.style.background = 'yellow';
    }else{
        button.style.background = 'blue';
        document.getElementById(computerSelection).style.background = 'red';
    }*/

    winText.textContent = `WINS: ${playerWins}`;
    lossText.textContent = `LOSSES ${playerLosses}`;
  })
});


//function declarations below
function getComputerChoice(){
    let result = Math.ceil((Math.random() * 3))
    
    if (result == 1){
        return "rock";
    } else if (result == 2){
        return "paper";
    }else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "rock"){
        return "It was a tie, no points added";
    }else if (playerSelection === "rock" && computerSelection === "paper"){
        playerLosses += 1;
        return "You lose! Rock lost to Paper";
    }else if (playerSelection === "rock" && computerSelection === "scissors"){
        playerWins += 1;
        return "You won! Rock beat Scissors"
    }else if (playerSelection === "paper" && computerSelection === "paper"){
        return "It was a tie, no points added";
    }else if (playerSelection === "paper" && computerSelection === "scissors"){
        playerLosses += 1;
        return "You lose! Paper lost to Scissors";
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        playerWins += 1;
        return "You won! Paper beat Rock";
    }else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return "It was a tie, no points added";
    }else if (playerSelection === "scissors" && computerSelection === "rock"){
        playerLosses += 1;
        return "You lose! Scissors lost to Rock";
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerWins += 1;
        return "You won! Scissors beat Paper";
    }
}