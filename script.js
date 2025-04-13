let humanScore = 0,
  computerScore = 0;

// play button
const playButtons = document.querySelectorAll(".play");
const currentRoundResult = document.querySelector(".current_result");
const finalResult = document.getElementById("result");
const scoreBoard = document.querySelector(".score_board");

function getComputerChoice() {
  const randomValue = Math.floor(Math.random() * 10);
  if (randomValue < 3) {
    return "rock";
  } else if (randomValue < 6 && randomValue >= 3) return "paper";
  else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
    } else if (computerChoice === "scissors") {
      humanScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
    } else if (computerChoice === "scissors") {
      computerScore++;
    }
  } else {
    if (computerChoice === "rock") {
      computerScore++;
    } else if (computerChoice === "paper") {
      humanScore++;
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
  return result;
}

playButtons.forEach((playButton) => {
  playButton.addEventListener("click", (e) => {
    let computerChoice = getComputerChoice().toLowerCase();
    let humanChoice = playButton.textContent.toLowerCase();
    playRound(humanChoice, computerChoice);
    scoreBoard.innerHTML = "";

    currentRoundResult.textContent =
      "Round Result " + getResult(humanScore, computerScore);

    let p = document.createElement("p");
    p.textContent = "Human Score " + humanScore;
    let p2 = document.createElement("p");
    p2.textContent = "Computer Score " + computerScore;
    scoreBoard.appendChild(p);
    scoreBoard.appendChild(p2);

    if (humanScore == 5 || computerScore == 5) {
      const result = getResult(humanScore, computerScore);
      finalResult.textContent = "Final Result " + result;
      console.log("Show Restart button");
    }
  });
});
