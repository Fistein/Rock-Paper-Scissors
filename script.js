//================== BUTTON CLICK ==============================
const btn = document.querySelectorAll('.btn-game');
let player;
const division = document.querySelector('div');
btn.forEach((button) => {
    button.addEventListener('click', () => {
        player = button.textContent;
        const playerSelection = player;
        division.textContent = playRound(playerSelection, computerSelection); 
    });
});





//================== PLACE TO DISPLAY SOLUTION =============


//division.textContent = 'hello!';







//================= COMPUTER RANDOM CHOICE ===========================




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

//================= GAME PLAY ================== 

function playRound(playerSelection, computerSelection) {
    // your code here!
  
    if(playerSelection === 'rock'){
        if(computerSelection === 'scissors'){
          return 'you win !';
        }
        else{
            return 'Computer wins !';  
        }
    }

    else if(playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            return 'you win !';
        }
        else{
            return 'Computer wins !';
        }
    }

    else if(playerSelection === 'scissors'){
        if(computerSelection === 'paper'){
            return 'you win !';
        }
        else{
            return 'Computer wins !';
        }
    }

    else {
        return 'Game becomes a tie !';
    }
    
  }
    
    const computerSelection = getComputerChoice();
  //console.log(playRound(playerSelection, computerSelection));
  
  
//function game(){
//const result = playRound(playerSelection, computerSelection);


   // }
    //game(); 

 