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
    getComputerChoice();
    console.log('playerChoice:', playerChoice);
    console.log('computerChoice:', computerChoice);
};

/* Sets computerChoice to a random choice from the choices array */
const getComputerChoice = () => {
    /* Gets a random decimal number from 0 (inclusive) to 1 (exclusive) */
    const randomNumber = Math.random();

    /* Scales the random number to the size of the choices array (0 up to 3) */
    const scaledNumber = randomNumber * choices.length;

    /* Rounds down to get a whole number index: 0, 1, or 2 */
    const randomIndex = Math.floor(scaledNumber);

    /* Uses the random index to pick one item from the choices array */
    computerChoice = choices[randomIndex];
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
