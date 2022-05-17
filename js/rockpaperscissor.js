
/*  ==========================   Rock Paper Scissors JS   ===============================*/

const playBtn = document.getElementById('playGame');
const results = document.getElementById('dW');

// Get User Input
const getUserChoice = userInput => {
  userInput = document.getElementById('userInput').value;
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  }
  else {
    results.innerHTML = "Please enter rock, paper, or scissors";
  }
};


// Get Computer Input
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0 :
      return 'rock';
    break;
    case 1 :
      return 'paper';
    break;
    case 2 :
      return 'scissors';
    break; 
  }
}


// Determine Winner Code
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      results.innerHTML = 'Computer chose paper: You Lost Sucka!';
    }
    else if (computerChoice === 'rock') {
      results.innerHTML = "Computer chose rock: It's a tie";
    }
    else {
      results.innerHTML = 'Computer chose ' + computerChoice + ': Hellz Yeah!  You Win!';
    };
  };

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      results.innerHTML = 'Computer chose scissors: You Lost Sucka!';
    }
    else if (computerChoice === 'paper') {
      results.innerHTML = "Computer chose paper: It's a tie";
    }
    else {
      results.innerHTML = 'Computer chose ' + computerChoice + ': Hellz Yeah! You Win!';
    };
  };

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      results.innerHTML = 'Computer chose rock: You Lost Sucka!';
    }
    else if (computerChoice === 'scissors') {
      results.innerHTML = "Computer chose scissors: It's a tie";
    }
    else {
      results.innerHTML = 'Computer chose ' + computerChoice + ': Hellz Yeah! You Win!';
    };
  };

  if (userChoice === 'bomb') {
    results.innerHTML = 'Bomb Beats All! "You Demolished The Computer!';
  };
};


// Game Functions
const playGame = () => {
  const userChoice = getUserChoice()
    console.log(userChoice);
  const computerChoice = getComputerChoice()
    console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};


// Play Game
playBtn.addEventListener('click', () => {
  playGame();
});