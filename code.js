//https://aws.plainenglish.io/how-to-use-aws-cloud9-with-github-3136692fa44d

// Buttons 
const images = document.querySelectorAll('img');

// Divs
const divResult = document.querySelector('#divResult');
const scores = document.querySelector('#scores');
const gameResult = document.querySelector('#gameResult');

//Declare variables 

let computerSelection = '';
let playerSelection = '';


//count the times everyone wins
    
let computerVictoriesNumber = 0;
let playerVictoriesNumber = 0;

//Get the PC choice 

function getComputerChoice(){
   let selection = Math.floor(Math.random()*3)+1;
   if(selection === 1) {
        computerSelection = 'rock';
   }else if (selection === 2) {
        computerSelection = 'paper';
   }else{
       computerSelection = 'scissors';
   }
    
   return computerSelection;
}



function playRound(playerSelection, computerSelection){
    

/* //get the user choice using a prompt
do{

playerSelection = prompt('Rock, paper or scissors?!').toLowerCase().trim();

if(playerSelection != 'rock' & playerSelection != 'paper' & playerSelection != 'scissors'){
alert('invalid option');
}

}while(playerSelection != 'rock' & playerSelection != 'paper' & playerSelection != 'scissors'); //Validate the user's choice */


//get a computer selection

computerSelection = getComputerChoice();

//Compare the choices 

    let result = '';
    if (playerSelection === computerSelection){
        result = 'There is not winner';
    }else if (playerSelection === 'paper' & computerSelection == 'rock'){
        playerVictoriesNumber++;
        result = 'You Win! Paper beats Rock 😀';
    }else if (playerSelection === 'paper' & computerSelection == 'scissors'){
        computerVictoriesNumber++;
        result = 'You Losse! Scissors beats Paper 🙁';
    }else if (playerSelection === 'rock' & computerSelection == 'scissors'){
        playerVictoriesNumber++;
        result = 'You Win! Rock beats Scissors 😀';
    }else if (playerSelection === 'rock' & computerSelection == 'paper'){
        computerVictoriesNumber++;
        result = 'You Losse! Paper beats Rock 🙁';
    }else if (playerSelection === 'scissors' & computerSelection == 'paper'){
        playerVictoriesNumber++;
        result = 'You Win! Scissors beats Paper 😀';
    }else if (playerSelection === 'scissors' & computerSelection == 'rock'){
        computerVictoriesNumber++;
        result = 'You Losse! Rock beats Scissors 🙁';
    };
    return result;
}


// sorting buttons
images.forEach((image) => {

  // and for each one we add a 'click' listener
  image.addEventListener('click', () => {
    playerSelection = image.id;
    divResult.innerHTML = '';
    const h2Result = document.createElement('h2');
    h2Result.textContent = playRound(playerSelection, computerSelection);
    divResult.appendChild(h2Result);
    
    //computer side
    const PC_selection = document.createElement('img');
    PC_selection.setAttribute('src', `images/${computerSelection}.svg`);
    PC_selection.setAttribute('width', '200px');
    PC_selection.setAttribute('height', '200px');
    /*PC_selection.textContent = `Computer said ${computerSelection}`;*/
    divResult.appendChild(PC_selection);
    gameResult.innerHTML = '';
     scores.innerHTML = '';
    
    
    
    //Show the results and  the winner 
    
    if (computerVictoriesNumber === 5){
        scores.innerHTML = `Victories: ${playerVictoriesNumber}, Defeats: ${computerVictoriesNumber}`;
        gameResult.innerHTML = 'You lost the game 🙁';
        playerVictoriesNumber = 0;
        computerVictoriesNumber = 0;
        
    }else if(playerVictoriesNumber === 5){
        scores.innerHTML = `Victories: ${playerVictoriesNumber}, Defeats: ${computerVictoriesNumber}`;        
        gameResult.innerHTML = 'You won the game 😀';
        playerVictoriesNumber = 0;
        computerVictoriesNumber = 0;
    };
    
  });
});


/*

//crate a function game()
function game() {
    // play the round 5 times
   let i = 1;
    while (i <= 5 ) {
       
        i++
    }
    
     
    //return the winner 
    if (computerVictoriesNumber == playerVictoriesNumber) {
            return `<h2>You were even! </h2>`
        }else if(computerVictoriesNumber < playerVictoriesNumber){
            return `<h2> Congratulations!! You have won the game. </h2>`
        }else{
            return `<h2> You losse the game =( </h2>`
        }
    };
    
*/