console.log("Hello from app.js");

/*-------------------------------- Constants --------------------------------*/
const choices = ["rock", "paper", "scissors"];

/*-------------------------------- Variables --------------------------------*/
let playerChoice
let computerChoice
let msg

/*------------------------ Cached Element References ------------------------*/
const resultDisplayEl = document.querySelector('#result-display');

/*-------------------------------- Functions --------------------------------*/
const getPlayerChoice = () => {
    console.log(event.target.id)
    playerChoice = event.target.id;
}

const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length)
    computerChoice = choices[randomIndex]
}

const compare = () => {
    if (computerChoice === playerChoice) {
        msg = "You tied";
    }
    // Rock vs Scissors
    else if (playerChoice === choices[0] && computerChoice === choices[2]) {
        msg = "Congrats, you win";
    }
    // Paper vs Rock
    else if (playerChoice === choices[1] && computerChoice === choices[0]) {
        msg = "Congrats, you win";
    }
    // Scissors vs Paper
    else if (playerChoice === choices[2] && computerChoice === choices[1]) {
        msg = "Congrats, you win";
    }
    else {
        msg = "You lose";
    }
};

const render = () => {
    resultDisplayEl.textContent = `You chose ${playerChoice}, the computer chose ${computerChoice}. ${msg}`;
};

const play = (event) => {
    getPlayerChoice(event);
    getComputerChoice();
    compare();
    render();
    console.log("The user choose: ", playerChoice)
    console.log("The computer choose: ", computerChoice)
};

/*----------------------------- Event Listeners -----------------------------*/
document.querySelector('main').addEventListener('click', play)