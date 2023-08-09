//================== BUTTON CLICK ==============================
const btn = document.querySelectorAll('.btn-game');
let player;
const division = document.querySelector('div');
let countercom = 0;
let counterplay = 0;


    
    btn.forEach((button) => {
        button.addEventListener('click', () => {
            player = button.textContent;
            const playerSelection = player;
            
            
            if(division.textContent.includes('Computer')){
                countercom = countercom + 1;
                //division.textContent += "  Computer has" + countercom + "point(s)!";
            }
            else{
                counterplay = counterplay + 1;
                //division.textContent += " "+"  Player gains" + counterplay + "point!";
            }
            

            if(countercom == 5 && countercom > counterplay){
                division.textContent += "  Finally Computer wins !";
            }
            else if(counterplay == 5 && countercom < counterplay){
                division.textContent += "  Finally Player takes a lead !";
            }
            else{
                division.textContent = playRound(playerSelection, computerSelection);

            }
        });
    });
    //==================== STYLING BUTTONS ==============
    let rock = document.getElementById('rock');
    rock.style.color = '#ffffff';
    rock.style.background = 'red';

    /*let paper = document.getElementById('paper');
    rpaper.style.color = '#ffffff';
    paper.style.background = 'green';

    let scissors = document.getElementById('#scissors');
    scissors.style.color = '#ffffff';
    scissors.style.background = 'blue'; */






//================== STYLING DIVISION =============

division.style.background = '#edb104';
division.style.width = '500px';
division.style.height = '100px';
division.style.textAlign = 'center';
division.style.paddingTop = '80px';
division.style.color = 'blue';
division.style.fontSize = '110%';
division.style.fontWeight = '900';








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
            return 'Computer wins this round !';  
        }
    }

    else if(playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            return 'you win this round!';
        }
        else{
            return 'Computer wins this round!';
        }
    }

    else if(playerSelection === 'scissors'){
        if(computerSelection === 'paper'){
            return 'you win this round!';
        }
        else{
            return 'Computer wins this round!';
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

 