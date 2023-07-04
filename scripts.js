function getComputerChoice(pick){
    return pick;
  }

    



function playRound(playerSelection, computerSelection) {

for (let i = 1; i <= 5; i++) {
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

 
    
 
  }
  
  //const playerSelection = prompt("Write to choose rock or scissor or paper").toLowerCase();
  const computerSelection = getComputerChoice("scissor");
  //console.log(playRound(playerSelection, computerSelection));
 
  //counting 
 
  function game(){

 let countComputer = 0;
 let countPlayer = 0;
   for(let i =1;i<=5;i++){
    const playerSelection = prompt("Write to choose rock or scissor or paper").toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
    if(computerSelection > 0){
        return true;
        countComputer++; 
    }
     
   } 
  }
  game();
  console.log(countComputer);
