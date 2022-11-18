const itemArray = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');
const results = document.querySelector('#roundResults');
const playerScore = document.querySelector('#playerScore'); 
const pcScore = document.querySelector('#pcScore');  

let scorePC = 0;
let scorePlayer = 0;

buttons.forEach(button => {button.addEventListener('click', runGame) })

function runGame(e) {

    pcScore.textContent = `PC Score: ${scorePC}`; 
    playerScore.textContent = `Player Score: ${scorePlayer}`;

    let playerSelection= (e.target.id);

    while ((scorePlayer < 5) && (scorePC < 5)) {
        playRound(playerSelection, getComputerChoice());
        if ((scorePlayer >= 5) || (scorePC >= 5)) {break}
        return
    }

    if (scorePC > scorePlayer) {
        roundResults.textContent = 'PC WINS!';
    } else if (scorePC < scorePlayer) {
        roundResults.textContent = 'PLAYER WINS!';
    } else {
        roundResults.textContent = 'DRAW!';
    }

}

function getComputerChoice() {
    return itemArray[Math.floor(Math.random()*itemArray.length)];
}

function playRound(playerSelection, computerSelection){

    console.log("Player: " + playerSelection)
    console.log("PC: " + computerSelection)

    if (computerSelection === playerSelection) {
        return
    }

    else if (computerSelection === 'rock') {
        } if (playerSelection === 'paper') {
            return playerScore.textContent = `Player Score: ${++scorePlayer}`;
        } else if (playerSelection === 'scissors') {
            return pcScore.textContent = `PC Score: ${++scorePC}`;
    }

    else if (computerSelection === 'paper') {
        } if (playerSelection === 'scissors') {
            return playerScore.textContent = `Player Score: ${++scorePlayer}`;
        } else if (playerSelection === 'rock') {
            return pcScore.textContent = `PC Score: ${++scorePC}`;
    }

    else if (computerSelection === 'scissors') {
        } if (playerSelection === 'rock') {
            return playerScore.textContent = `Player Score: ${++scorePlayer}`;
        } else if (playerSelection === 'paper') {
            return pcScore.textContent = `PC Score: ${++scorePC}`;
    }

}