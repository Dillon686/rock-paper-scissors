function getComputerChoice(){
    result = Math.ceil((Math.random() * 3))
    
    if (result == 1){
        return "Rock";
    } else if (result == 2){
        return "Paper";
    }else{
        return "Scissors";
    }
}
