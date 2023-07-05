
function getComputerChoice(){
    const random = Math.floor(Math.random()*3);
switch(random){
    case 0:
        return 'paper';
    case 1:
        return 'rock';
    case 2:
        return 'scissors';
}
   
}
   //console.log(getComputerChoice());
   
   function playRound(playerSelection, computerSelection) {
    // your code here!
  
    if(playerSelection === 'rock'){
        if(computerSelection === 'scissors'){
            return 'You won the game';
        }
        else{
            return 'Unfortunately, computer wins !';
        }
    }

    if(playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            return 'You won the game';
        }
        else{
            return 'Unfortunately, computer wins !';
        }
    }

    if(playerSelection === 'scissors'){
        if(computerSelection === 'paper'){
            return 'You won the game';
        }
        else{
            return 'Unfortunately, computer wins !';
        }
    }

    if(playerSelection === computerSelection){
        return 'Game becomes a tie !';
    }
  }
   
  const playerSelection = prompt("Enter Rck, Scissors or Rock").toLowerCase();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
 