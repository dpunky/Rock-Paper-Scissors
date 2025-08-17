// Test to check if JS is connected
console.log("Hello World");

// Step 2: Get Computer Choice
//function getComputerChoice() {
  //const randomNum = Math.random();
  //if (randomNum < 1 / 3) {
    //return "rock";
  //} else if (randomNum < 2 / 3) {
    //return "paper";
  //} else {
    //return "scissors";
  //}
//}

// Step 3: Get Human Choice
//function getHumanChoice() {
//  const choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
  //return choice;
//}

// Step 4: Declare scores
//let humanScore = 0;
//let computerScore = 0;

// Step 5: Play a single round
//function playRound(humanChoice, computerChoice) {
//  humanChoice = humanChoice.toLowerCase();

//  if (humanChoice === computerChoice) {
//    console.log(`It's a tie! Both chose ${humanChoice}.`);
//    return;
//  }

//  const winsAgainst = {
//    rock: "scissors",
//    paper: "rock",
//    scissors: "paper"
//  };

//  if (winsAgainst[humanChoice] === computerChoice) {
//    humanScore++;
//    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
//  } else {
//    computerScore++;
//    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
//  }
//}

// Step 6: Play 5 rounds
//function playGame() {
  //humanScore = 0;
  //computerScore = 0;

  //for (let i = 1; i <= 5; i++) {
    //console.log(`--- Round ${i} ---`);
    //const humanSelection = getHumanChoice();
    //const computerSelection = getComputerChoice();
    //playRound(humanSelection, computerSelection);
    //console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);
  //}

  //console.log('--- Game Over ---');
  //if (humanScore > computerScore) {
    //console.log("Congratulations! You won the game!");
  //} else if (computerScore > humanScore) {
    //console.log("Sorry! The computer won the game.");
  //} else {
    //console.log("It's a tie game!");
  //}
//}

// Start the game
//playGame();

let playerScore = 0;
let computerScore = 0;

const roundResult = document.getElementById('round-result');
const scoreDisplay = document.getElementById('score');
const winnerDisplay = document.getElementById('winner');

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => playRound(button.id));
});

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  if (playerScore >= 5 || computerScore >= 5) return;

  const computerSelection = getComputerChoice();
  let result = '';

  if (playerSelection === computerSelection) {
    result = `It's a tie! You both chose ${playerSelection}.`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    result = `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    result = `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }

  roundResult.textContent = result;
  scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    declareWinner();
  }
}

function declareWinner() {
  if (playerScore > computerScore) {
    winnerDisplay.textContent = '🎉 You won the game!';
  } else {
    winnerDisplay.textContent = '😢 Computer won the game!';
  }
}
