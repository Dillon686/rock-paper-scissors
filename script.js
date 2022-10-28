function getComputerChoice(){
    result = Math.ceil((Math.random() * 3))
    
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
        return "It was a tie";
    }else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You lose! Rock lost to Paper";
    }else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You won! Rock beat Scissors"
    }else if (playerSelection === "paper" && computerSelection === "paper"){
        return "It was a tie";
    }else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "You lose! Paper lost to Scissors";
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You won! Paper beat Rock";
    }else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return "It was a tie";
    }else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You lose! Scissors lost to Rock";
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You won! Scissors beat Paper";
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;
    let playerChoice = '';

    for(let i = 0; i < 5; i++){
        do{
            playerChoice = prompt('Please select "Rock", "Paper", or "Scissors"');
            playerChoice = playerChoice.toLowerCase();
        }while(playerChoice !== "rock" && playerChoice != "paper" && playerChoice != "scissors");
        
        playerChoice = "rock";
        result = playRound(playerChoice, getComputerChoice());
        console.log(result);

        if (result === "It was a tie"){
            ties += 1;
        } else if (result.slice(0, 7) === "You won"){
            playerWins += 1;
        } else if (result.slice(0, 8) === "You lose"){
            computerWins += 1;
        }
    }
    if (playerWins > computerWins && playerWins > ties){
        console.log("You won the majority of matches against the computer!");
    }else if (computerWins > playerWins && computerWins > ties){
        console.log("The computer won the majority of matches.");
    }else if (ties > computerWins && ties > playerWins){
        console.log("It was a tie overall!");
    }
}

game();