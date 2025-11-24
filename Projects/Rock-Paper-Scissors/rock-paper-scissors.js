let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/*if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
};
*/

let isAutoPlaying = false;
let intervalId;

/*const autoPlay = () => {
  
}*/

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId =  setInterval(() => {
    const playerMove = pickComputerMove();
    playGame(playerMove);
    document.querySelector('.auto-play-button').innerHTML = 'Stop playing';
  }, 1000);
  isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.auto-play-button').innerHTML = 'Auto Play';
  }
}
document.querySelector('.auto-play-button').addEventListener('click', () => {resetMessage()});

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}

function resetMessage() {
  document.querySelector('.reset-message')
    .innerHTML = `
    Are you sure you want to reset the score?
    <button class="reset-message-button yes-button">Yes</button>
    <button class="reset-message-button no-button">No</button>`;
  
  document.querySelector('.yes-button').addEventListener('click', () => {
    resetScore();
    document.querySelector('.reset-message')
    .innerHTML = '';
  });
  document.querySelector('.no-button').addEventListener('click', () => {
    document.querySelector('.reset-message')
    .innerHTML = '';
  })
}

document.querySelector('.reset-button').addEventListener('click', () => {resetMessage()});

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'a') {
    autoPlay();
  } else if (event.key === 'Backspace') {
    resetMessage();
  }
})

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.'
    } else if (computerMove === 'paper') {
      result = 'Tie.'
    } else if (computerMove === 'scissors') {
      result = 'You lose.'
    }
    
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.'
    } else if (computerMove === 'paper') {
      result = 'You win.'
    } else if (computerMove === 'scissors') {
      result = 'Tie.'
    }
  }

if (result === 'You win.') {
  score.wins ++;
}  else if (result === 'You lose.') {
  score.losses ++;
} else if (result === 'Tie.') {
  score.ties ++;
}

localStorage.setItem('score', JSON.stringify(score));
updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = 
  `You 
  <img class="move-icon" src="rps-images/${playerMove}-emoji.png">
  <img class="move-icon" src="rps-images/${computerMove}-emoji.png"> 
  Computer`;

}


function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = 
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

function pickComputerMove() {
  let computerMove ='';

  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}
