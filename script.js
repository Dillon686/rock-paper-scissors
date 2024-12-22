function getComputerChoice(){
  const randomInt = Math.floor(Math.random() * 3)
  
  if (randomInt === 0){
    return "rock";
  }else if (randomInt === 1){
    return "paper";
  }else if (randomInt === 2){
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice){
  if (humanChoice == "rock" && computerChoice == "rock"){
    resultsDiv.textContent = "You both chose 'rock', it's a tie!";
  }else if (humanChoice == "scissors" && computerChoice == "scissors"){
    resultsDiv.textContent = "You both chose 'scissors', it's a tie!";
  }else if (humanChoice == "paper" && computerChoice == "paper"){
    resultsDiv.textContent = "You both chose 'rock', it's a tie!";
  }else if (humanChoice == "rock" && computerChoice == "paper"){
    resultsDiv.textContent = "You lose! Rock lost to paper!";
    computerScore++;
  }else if (humanChoice == "rock" && computerChoice == "scissors"){
    resultsDiv.textContent = "You win! Rock beat scissors!";
    humanScore++;
  }else if (humanChoice == "paper" && computerChoice == "rock"){
    resultsDiv.textContent = "You win! Paper beat rock!";
    humanScore++;
  }else if (humanChoice == "paper" && computerChoice == "scissors"){
    resultsDiv.textContent = "You lose! Paper lost to scissors!";
    computerScore++;
  }else if (humanChoice == "scissors" && computerChoice == "rock"){
    resultsDiv.textContent = "You lose! Scissors lost to rock!";
    computerScore++;
  }else if (humanChoice == "scissors" && computerChoice == "paper"){
    resultsDiv.textContent = "You win! Scissors beat paper!";
    humanScore++;
  }
}

function playGame(){

  playRound();

  /*if (humanScore === computerScore){
    console.log("After five rounds, it was a tie!");
    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
  }else if (humanScore > computerScore){
    console.log("After five rounds, the player won!");
    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
  }else if (humanScore < computerScore){
    console.log("After five rounds, the computer won!");
    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
  }*/
}

let resultsDiv = document.querySelector("#results");
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", () => {
  resultsDiv.textContent = "";
  playRound(button.id, getComputerChoice())
}));

playRound();
