//https://aws.plainenglish.io/how-to-use-aws-cloud9-with-github-3136692fa44d

// Buttons 
const buttons = document.querySelectorAll('button');
// Div with result
const divResult = document.querySelector('#divResult');

//Declare variables 

let computerSelection = ''
let playerSelection = ''

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



//count the times everyone wins
    
let computerVictoriesNumber = 0;
let playerVictoriesNumber = 0;



//document.write(playerSelection);




function playRound(playerSelection, computerSelection){
    
    //get the user choice 
/*do{

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
        result = 'There is not winner'
    }else if (playerSelection === 'paper' & computerSelection == 'rock'){
        playerVictoriesNumber++
        result = 'You Win! Paper beats Rock';
    }else if (playerSelection === 'paper' & computerSelection == 'scissors'){
        computerVictoriesNumber++
        result = 'You Losse! Scissors beats Paper';
    }else if (playerSelection === 'rock' & computerSelection == 'scissors'){
        playerVictoriesNumber++
        result = 'You Win! Rock beats Scissors';
    }else if (playerSelection === 'rock' & computerSelection == 'paper'){
        computerVictoriesNumber++
        result = 'You Losse! Paper beats Rock';
    }else if (playerSelection === 'scissors' & computerSelection == 'paper'){
        playerVictoriesNumber++
        result = 'You Win! Scissors beats Paper';
    }else if (playerSelection === 'scissors' & computerSelection == 'rock'){
        computerVictoriesNumber++
        result = 'You Losse! Rock beats Scissors';
    };
    return result;
}


// sorting buttons
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    playerSelection = button.id;
    divResult.innerHTML = '';
    const paraResult = document.createElement('p');
    paraResult.textContent = playRound(playerSelection, computerSelection);
    divResult.appendChild(paraResult);
    const PC_selection = document.createElement('h2')
    PC_selection.textContent = `Computer said ${computerSelection}`;
    divResult.appendChild(PC_selection);
    
    
  });
});




/*

//Show the results and  the winner 
    

//crate a function game()
function game() {
    // play the round 5 times
   let i = 1;
    while (i <= 5 ) {
        document.write(`${i} Round: ${playRound(playerSelection, computerSelection)} <br>`);
       
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
    }
    //run playround inside this fucntion 
    // crate a score for every time player wins or pc wins 
    
document.write(game())
document.write(`<br> Player victories: ${playerVictoriesNumber} <br>`);
document.write(`Computer victories: ${computerVictoriesNumber} <br>`);
     
*/

     /*
     // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.name);
  });
});
*/