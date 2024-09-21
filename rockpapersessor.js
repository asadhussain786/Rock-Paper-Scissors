let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

// if (!score) {
//     score = {
//         wins: 0,
//         losses: 0,
//         ties: 0
//     };
// }
function playGame(playMove) {
const computerMove = pickComputerMove();

let result = '';
if (playMove === 'rock') {
    if (computerMove === 'rock') {
        result = 'Tie.';
    } else if (computerMove === 'paper') {
        result = 'You lose.';
    } else if (computerMove === 'Scissors') {
        result = 'You win.';
    }
}
else if (playMove === 'paper') {
    if (computerMove === 'rock') {
        result = 'You win.';
    } else if (computerMove === 'paper') {
        result = 'Tie.';
    } else if (computerMove === 'Scissors') {
        result = 'You lose.';
    }

}
else if (playMove === 'Scissors') {
    if (computerMove === 'rock') {
        result = 'You lose.';
    } else if (computerMove === 'paper') {
        result = 'You win.';
    } else if (computerMove === 'Scissors') {
        result = 'Tie.';
    }
}

if (result === 'You win.') {
    score.wins += 1;
} else if (result === 'You lose.') {
    score.losses += 1;
} else if (result === 'Tie.') {
    score.ties += 1;
}
localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-moves').innerHTML = `You
<img src="${playMove}-emoji.png" alt="" class="move-icon">
<img src="${computerMove}-emoji.png" alt="" class="move-icon">
Computer`;

//             alert(`You picked ${playMove}. Computer picked ${computerMove}. ${result}
// Wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`);
}
function updateScoreElement() {
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`;
}
function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = '';
if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissors';
}
return computerMove;
}