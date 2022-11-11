const itemArray = ['rock', 'paper', 'scissors'];
let scorePC = 0
let scorePlayer = 0

function getComputerChoice() {
    return itemArray[Math.floor(Math.random()*itemArray.length)];
}

function getPlayerChoise() {
    let playerSelection = prompt("Enter Value: ").toLowerCase();

    console.log(playerSelection)

    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        return playerSelection;
    } else {
        console.log("Please Enter a Correct Value");
        getPlayerChoise();
    }
}

function playRound(playerSelection, computerSelection){

    console.log("Player: " + playerSelection)
    console.log("PC: " + computerSelection)

    if (computerSelection === playerSelection) {
        return
    }

    if (computerSelection === 'rock') {
    } else if (playerSelection === 'paper') {
        return scorePlayer++
    } else if (playerSelection === 'scissors') {
        return scorePC++ 
    }

    if (computerSelection === 'paper') {
    } else if (playerSelection === 'scissors') {
        return scorePlayer++
    } else if (playerSelection === 'rock') {
        return scorePC++
    }

    if (computerSelection === 'scissors') {
    } else if (playerSelection === 'rock') {
        return scorePlayer++
    } else if (playerSelection === 'paper') {
        return scorePC++
    }

}

function game() {

    for (let round = 0; round < 3; round++) {
        playRound(getPlayerChoise(), getComputerChoice());
        console.log("Player Score: " + scorePlayer)
        console.log("PC Score: " + scorePC)
    }

    if (scorePC > scorePlayer) {
        console.log('PC WINS!')
    } else if (scorePC < scorePlayer) {
        console.log('PLAYER WINS!')
    } else {
        console.log('DRAW!')
    }
    
}

console.log(game())