let humanScore = 0;
let computerScore = 0;
let round = 1;

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    return randomNumber == 1 ? "rock" :
        randomNumber == 2 ? "paper" :
            "scissors";
};

const getHumanChoice = () => prompt("Enter Rock, Paper or Scissors!").toLowerCase();


const playRound = (humanChoice, computerChoice) => {
    const displayText = document.querySelector("#display");
    if (humanChoice == computerChoice) {
        displayText.textContent = `Its a Tie! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} ties ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} !`;
        return;
    }
    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")) {
        humanScore++;
        displayText.textContent = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    } else {
        computerScore++;

        displayText.textContent = `You Lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`;
    }
};

const btnContainer = document.querySelector("#btnContainer");
const score = document.querySelector("#score");
const res = document.querySelector("#result");

btnContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        playRound(e.target.id, getComputerChoice());
        score.textContent = `Round: ${round}, Your score: ${humanScore} , Computer score: ${computerScore}`;
        if (computerScore == 5 || humanScore == 5) {
            res.textContent = computerScore == 5 ? "You Lose!" : "You Win!";
            const allButtons = btnContainer.querySelectorAll("button");
            allButtons.forEach(button => button.disabled = true);
            return;
        }
    }
});


