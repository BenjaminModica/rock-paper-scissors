//Generates rock, paper or scissors strings randomly
function computerPlay() {
    let pickNbr = Math.floor(Math.random() * 3);
    let pickString;
    switch (pickNbr) {
        case 0:
            pickString = "Rock";
            break;
        case 1:
            pickString = "Paper";
            break;
        case 2:
            pickString = "Scissors";
            break;
        default:
            console.error("Default case should not happen");
    } return pickString;
}

//Evaluates winner from player and computer selections
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();
    const playerWinCombos = ["Rock-Scissors", "Scissors-Paper", "Paper-Rock"];
    let roundCombo = `${playerSelection}-${computerSelection}`;

    if (playerSelection === computerSelection) {
        console.log(`It's a tie! Computer also chose ${computerSelection}`);
        showResult(playerSelection, computerSelection, "tie");
    } else if (playerWinCombos.includes(roundCombo)) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        showResult(playerSelection, computerSelection, "win");
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        showResult(playerSelection, computerSelection, "lose");
    }
}

const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => playRound('Rock', computerPlay()));
const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => playRound('Paper', computerPlay()));
const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => playRound('Scissors', computerPlay()));

const playAgainBtn = document.createElement('button');
playAgainBtn.textContent = "Play Again?";
playAgainBtn.setAttribute('style', 'width: 100px; height: 45px; align-self: center; margin-top: 15px');

playAgainBtn.addEventListener('click', () => window.location.href=window.location.href);

//Updates DOM with results, adds playAgainBtn and disables choice buttons
function showResult(playerSelection, computerSelection, result) {
    console.log(playerSelection + computerSelection + result);

    const resultContainer = document.querySelector('.resultContainer')
    const playerChoice = document.createElement('div');
    playerChoice.textContent = `You Chose: ${playerSelection}`;
    const computerChoice = document.createElement('div');
    computerChoice.textContent = `Computer Chose: ${computerSelection}`;

    resultContainer.appendChild(playerChoice);
    resultContainer.appendChild(computerChoice);

    const result1 = document.createElement('div');
    const result2 = document.createElement('div');

    if (result == "tie") {
        result1.textContent = "It's A Tie!";
        result2.textContent = `(${playerSelection} Is The Same As ${computerSelection})`;
    } else if (result == "win") {
        result1.textContent = "You Win!";
        result2.textContent = `(${playerSelection} Beats ${computerSelection})`;
    } else if (result == "lose") {
        result1.textContent = "You Lose!";
        result2.textContent = `(${computerSelection} Beats ${playerSelection})`;
    } else {
        console.log("No winner, something is wrong");
    }

    result1.setAttribute('style', 'font-size: 35px; align-self: center; padding-top: 50px')
    resultContainer.appendChild(result1);
    result2.setAttribute('style', 'align-self: center; font-weight: 100; font-size: 10px; padding-top: 0px')
    resultContainer.appendChild(result2);

    resultContainer.appendChild(playAgainBtn);

    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    rockBtn.disabled = true;
}

