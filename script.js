
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
   
  //const playerSelection = prompt("Enter Rck, Scissors or Rock").toLowerCase();
  const computerSelection = getComputerChoice();
  //console.log(playRound(playerSelection, computerSelection));

  let counterC = 0;
  let counterP = 0;
  function game(){
    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt("Enter Rock, Scissors or Paper").toLowerCase();
        //console.log(playRound(playerSelection, computerSelection));
        const result = playRound(playerSelection, computerSelection);
        if(result.includes('computer')){
            counterC = counterC + 1;
        }

        if(result.includes('You')){
            counterP = counterP + 1;
        }
            console.log(result);
    }
    if(counterP > counterC){
        return 'Finally, player wins.';
    }
    else{
        return 'Ohh!, computer wins.';
    }
    // 
  }
  console.log(game());


 