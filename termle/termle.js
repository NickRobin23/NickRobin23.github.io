let validWords = [];

fetch('https://api.dictionary.com/words?limit=500')
  .then(response => response.json())
  .then(data => {
    validWords = data.map(word => word.word.toLowerCase());
    initGame();
  })
  .catch(error => {
    console.log('Failed to fetch valid words:', error);
    alert('Failed to fetch valid words. Please try again later.');
  });

let targetWord = '';
let attempts = 0;

let inputField = document.querySelector('#guess-input');
let guessRows = document.querySelectorAll('.guess-row');

// Generate the on-screen keyboard
let keyboard = document.querySelector('#keyboard');

let rowQwerty = createKeyboardRow('qwertyuiop');
let rowAsdfg = createKeyboardRow('asdfghjkl');
let rowZxcvb = createKeyboardRow('zxcvbnm');

keyboard.appendChild(rowQwerty);
keyboard.appendChild(rowAsdfg);
keyboard.appendChild(rowZxcvb);

function createKeyboardRow(letters) {
  let row = document.createElement('div');
  row.className = 'keyboard-row';

  for (let letter of letters) {
    let key = document.createElement('div');
    key.className = 'key';
    key.textContent = letter;
    key.addEventListener('click', function () {
      if (inputField.value.length < 5) {
        inputField.value += this.textContent;
        inputField.focus(); // Keep focus on the input field
      }
    });
    row.appendChild(key);
  }

  return row;
}

function initGame() {
  targetWord = validWords[Math.floor(Math.random() * validWords.length)];
}

inputField.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    let guess = inputField.value;
    if (guess.length !== 5) {
      alert('Please enter a word with exactly 5 letters.');
    } else if (validWords.includes(guess.toLowerCase())) {
      updateGuessSlots(guess.toLowerCase()); // Update the guess slots
      checkGuess(guess.toLowerCase());
    } else {
      alert('Please enter a valid word.');
    }
  }
});

function updateGuessSlots(guess) {
  let guessRow = guessRows[attempts];
  let guessSlots = guessRow.querySelectorAll('.guess-slot');
  for (let i = 0; i < 5; i++) {
    guessSlots[i].textContent = guess.charAt(i).toUpperCase(); // Show the guessed letter
  }
  attempts++;
}

function checkGuess(guess) {
  let guessRow = guessRows[attempts - 1];
  let guessSlots = guessRow.querySelectorAll('.guess-slot');
  let correctGuesses = 0;
  let correctPositions = 0;

  for (let i = 0; i < 5; i++) {
    if (guess.charAt(i) === targetWord.charAt(i)) {
      guessSlots[i].classList.add('green'); // Correct letter in correct position
      correctPositions++;
    } else if (targetWord.includes(guess.charAt(i))) {
      guessSlots[i].classList.add('yellow'); // Correct letter in wrong position
      correctGuesses++;
    } else {
      guessSlots[i].classList.add('gray'); // Incorrect letter
    }
  }

  if (correctPositions === 5) {
    alert('Congratulations, you won!');
  } else if (attempts === 5) {
    alert(`Sorry, you lost. The correct word was "${targetWord}".`);
  }

  inputField.value = ''; // Clear the input field
}
