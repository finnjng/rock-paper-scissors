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

/* 
    Pseudocode:
    IF human choice ties computer choice
        Display tie and exits
    IF human choice beats computer choice 
        Display win and adds to score human score counter
    ELSE 
        Display lose and adds to score computer score counter 
    ENDIF
*/

const playRound = (humanChoice, computerChoice) => {

    if (humanChoice == computerChoice) {
        console.log(`Its a Tie! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} ties ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} !`);
        return;
    }
    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")) {
        humanScore++;
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
    } else {
        computerScore++
        console.log(`You Lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`);
    }
};

while (round <= 5) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Round: ${round}, Your score: ${humanScore} , Computer score: ${computerScore}`);
    round++;
}
