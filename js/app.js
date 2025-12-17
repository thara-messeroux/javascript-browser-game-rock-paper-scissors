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

/* Runs when a player clicks Rock, Paper, or Scissors */
// const play = (event) => {
    // console.log(event);            // everything
//     console.log(event.target);     // the button
    // console.log(event.target.id);  // "rock", "paper", or "scissors"

// };

/* Sets playerChoice based on which button was clicked */
const getPlayerChoice = (event) => {
    playerChoice = event.target.id;
};

/* Runs when a player clicks Rock, Paper, or Scissors */
const play = (event) => {
    getPlayerChoice(event);
    console.log(playerChoice);
};

/*----------------------------- Event Listeners -----------------------------*/

/*
document.querySelector('#rock').addEventListener('click', play);
document.querySelector('#paper').addEventListener('click', play);
document.querySelector('#scissors').addEventListener('click', play);
*/

document.querySelectorAll('button').forEach(function (button) {
    button.addEventListener('click', play);
});
