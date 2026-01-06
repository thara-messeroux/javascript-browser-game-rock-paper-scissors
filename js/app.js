console.log("Hello from app.js");

/*-------------------------------- Constants --------------------------------*/
const choices = ["rock", "paper", "scissors"];
/*-------------------------------- Variables --------------------------------*/
let playerChoice
let computerChoice
let msg
/*------------------------ Cached Element References ------------------------*/
const resultDisplay = document.querySelector('#result-display');
/*-------------------------------- Functions --------------------------------*/
const play = (event) => {   
    console.log(event.target)
    console.dir(event.target)
}
/*----------------------------- Event Listeners -----------------------------*/
document.querySelector('main').addEventListener('click', play)