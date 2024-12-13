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

function getHumanChoice(){
  return prompt("Please enter rock, paper, or scissors: ");
}

function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice == "rock" && computerChoice == "rock"){
    console.log("You both chose 'rock', it's a tie!");
  }else if (humanChoice == "scissors" && computerChoice == "scissors"){
    console.log("You both chose 'scissors', it's a tie!");
  }else if (humanChoice == "paper" && computerChoice == "paper"){
    console.log("You both chose 'rock', it's a tie!");
  }
}

let humanScore = 0;
let computerScore = 0;
