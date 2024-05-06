function getComputerChoice() {
  let r = Math.floor(Math.random() * (3 - 0));
  if (r === 0) {
    // console.log("rock");
    return "rock";
  } else if (r === 1) {
    // console.log("paper");
    return "paper";
  } else {
    // console.log("scissors");
    return "scissors";
  }
}

function getHumanChoice() {
  let p = prompt();
  //   console.log(p.toLowerCase());
  return p.toLowerCase();
}

let humanScore = 0,
  computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!");
    console.log("computer: " + computerChoice);
    console.log("human: " + humanChoice);
    humanScore += 1;
  } else if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "scissors")
  ) {
    console.log("Tie!");
    console.log("computer: " + computerChoice);
    console.log("human: " + humanChoice);
  } else {
    console.log("You lose!");
    console.log("computer: " + computerChoice);
    console.log("human: " + humanChoice);
    computerScore += 1;
  }
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// console.log(playRound(humanSelection, computerSelection));

// console.log(playRound(getHumanChoice(), getComputerChoice()));

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log("computer score: " + computerScore);
  console.log("human score: " + humanScore);
}
