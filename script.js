let humanScore = 0,
  computerScore = 0;

function getComputerChoice() {
  const randomValue = Math.floor(Math.random() * 10);
  if (randomValue < 3) {
    return "rock";
  } else if (randomValue < 6 && randomValue >= 3) return "paper";
  else {
    return "scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Enter your choice");
  return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("You lose! Paper beats Rock");
      computerScore++;
    } else if (computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors");
      humanScore++;
    } else {
      console.log("Tie");
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You Win! Paper beats Rock");
      humanScore++;
    } else if (computerChoice === "scissors") {
      console.log("You lose! Scissors beats Rock");
      computerScore++;
    } else {
      console.log("Tie");
    }
  } else {
    if (computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors");
      computerScore++;
    } else if (computerChoice === "paper") {
      console.log("You win! Scissors beats Paper");
      humanScore++;
    } else {
      console.log("Tie");
    }
  }
}

function getResult(humanScore, computerScore) {
  let result;
  if (humanScore > computerScore) {
    result = "You win";
  } else if (humanScore < computerScore) {
    result = "Computer win";
  } else {
    result = "Tie";
  }
  console.log("Human:", humanScore);
  console.log("Computer:", computerScore);
  return result;
}

function playGame() {
  for (let x = 0; x < 5; x++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  const result = getResult(humanScore, computerScore);
  console.log(result);
}

const gameStartButton = document.querySelector("#game_start_button");
gameStartButton.addEventListener("click", () => {
  playGame();
});

// console.log(getHumanChoice());
