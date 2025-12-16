console.log('Hello World!');

/*-------------------------------- Constants --------------------------------*/

const choices = ['rock', 'paper', 'scissors'];

/*-------------------------------- Variables --------------------------------*/

let computerChoice; /* will store the computer’s current move */
let msg; /* will store the message shown to the user (win/lose/tie) - the computer’s selection, which is randomly determined,*/
let playerChoice; /* will store the player’s current move */

/* For now, we’ll only initialize these variables and assign their values based on the game’s progression later.*/



/*------------------------ Cached Element References ------------------------*/

const resultDisplayEl = document.querySelector('#result-display');


/*-------------------------------- Functions --------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('#rock').addEventListener('click', handleClick);
document.querySelector('#paper').addEventListener('click', handleClick);
document.querySelector('#scissors').addEventListener('click', handleClick);


