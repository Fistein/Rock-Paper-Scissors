function getComputerChoice(pick){
    return pick;
  }

    



function playRound(playerSelection, computerSelection) {


    if(playerSelection == 'paper' && computerSelection == 'rock'){
        return playerSelection + " for player wins the game";
        
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        return computerSelection + " for computer wins the game";
       
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissor'){
        return computerSelection + " for computer wins the game";
       
    }
    else if(playerSelection == 'scissor' && computerSelection == 'paper'){
        return playerSelection + " for player wins the game";
       
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissor'){
        return playerSelection + " for player wins the game";
      
    }
    else if(playerSelection == 'scissor' && computerSelection == 'rock'){
        return computerSelection + " for computer wins the game";
     
    }
    else if(playerSelection == 'rock' && computerSelection == 'rock'){
        return playerSelection + " and " + computerSelection+ " are the same means none wins.";
        
    }
    else if(playerSelection == 'scissor' && computerSelection == 'scissor'){
        return playerSelection + " and " + computerSelection+ " are the same means none wins.";
    }
    else if(playerSelection == 'paper' && computerSelection == 'paper'){
        return playerSelection + " and " + computerSelection+ " are the same means none wins.";
    }
    else{
        return "your choice is not included!";
    }


}

  const computerSelection = getComputerChoice("scissor");
  
  function game(){
 for(let i =1;i<=5;i++){
    const playerSelection = prompt("Write to choose rock or scissor or paper").toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
    
   } 
  }
  game();
  