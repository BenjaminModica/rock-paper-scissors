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

//Buttons and eventlisteners for multiple choices
const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => playRound('Rock', computerPlay()));
const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => playRound('Paper', computerPlay()));
const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => playRound('Scissors', computerPlay()));

//Play again button, appears after result is shown
const playAgainBtn = document.createElement('button');
playAgainBtn.textContent = "Play Again?";
playAgainBtn.setAttribute('style', 'width: 100px; height: 45px; align-self: center; margin-top: 15px');

//Refresh page on play again button
playAgainBtn.addEventListener('click', () => window.location.href=window.location.href);

//Updates DOM with results, adds playAgainBtn and disables multiple choice buttons
function showResult(playerSelection, computerSelection, result) {
    console.log(playerSelection + computerSelection + result);
    const resultContainer = document.querySelector('.resultContainer')

    //Text displaying player and computer choices. 
    const playerChoice = document.createElement('div');
    playerChoice.textContent = `You Chose ${playerSelection}`;
    playerChoice.classList.add('playerchoice');
    const computerChoice = document.createElement('div');
    computerChoice.textContent = `Computer Chose ${computerSelection}`;
    computerChoice.classList.add('computerchoice');

    resultContainer.appendChild(playerChoice);
    setTimeout(() => resultContainer.appendChild(computerChoice), 1000);

    //Displays who won
    const result1 = document.createElement('div');
    //Explains result
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
    setTimeout(() => resultContainer.appendChild(result1), 3100);
    
    result2.setAttribute('style', 'align-self: center; font-weight: 100; font-size: 10px; padding-top: 0px')
    setTimeout(() => resultContainer.appendChild(result2), 3100);

    setTimeout(() => resultContainer.appendChild(playAgainBtn), 4500);

    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    rockBtn.disabled = true;
}

