// List of valid words
import { validWords } from './valid_words.js';

let targetWord = validWords[Math.floor(Math.random() * validWords.length)];
let attempts = 0;
let gameWon = false;

let guessRows = document.querySelectorAll('.guess-row');
let currentGuess = Array(5).fill(null); // Hold current guess letters

let gameStats = {
  played: 0,
  wins: 0,
  currentStreak: 0,
  maxStreak: 0,
  guessDistribution: Array(6).fill(0), // For guesses from 1 to 6
  totalGuesses: 0
};

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
      addLetterToGuess(this.textContent);
    });
    row.appendChild(key);
  }

  return row;
}

// Add letter to current guess
function addLetterToGuess(letter) {
  if (!gameWon && currentGuess.includes(null)) {
    let index = currentGuess.indexOf(null);
    currentGuess[index] = letter;
    updateGuessSlots(currentGuess.join('')); // Update the guess slots
  }
}

// Clear current guess
function clearCurrentGuess() {
  currentGuess.fill(null);
}

// Function to remove letter from current guess
function removeLetterFromGuess() {
  if (currentGuess.some((x) => x !== null)) {
    let index = currentGuess.lastIndexOf(null);
    if (index === -1) {
      index = currentGuess.length - 1; // Remove last letter if no null found
    }
    while (index >= 0 && currentGuess[index] === null) {
      index--; // Find the first non-null letter
    }
    if (index >= 0) {
      currentGuess[index] = null; // Delete the non-null letter
    }
    updateGuessSlots(currentGuess.join('')); // Update the guess slots
  }
}

// Function to update guess slots
function updateGuessSlots(guess, index = attempts) {
  let guessRow = guessRows[index];
  let guessSlots = guessRow.querySelectorAll('.guess-slot');
  for (let i = 0; i < 5; i++) { // Always iterate over 5 slots
    guessSlots[i].textContent = guess.charAt(i) ? guess.charAt(i).toUpperCase() : ""; // Show the guessed letter or clear if no letter
  }
}

// Event listener for keydown events
window.addEventListener('keydown', function (event) {
  if (event.key === 'Enter' && !gameWon) {
    let guess = currentGuess.join('');
    if (currentGuess.includes(null)) {
      showInvalidWordPopup('Please enter a word with exactly 5 letters.');
    } else if (validWords.includes(guess)) {
      checkGuess(guess);
      clearCurrentGuess();
    } else {
      showInvalidWordPopup('Please enter a valid word.');
    }
  } else if (event.key === 'Backspace') {
    event.preventDefault(); // Prevent browser navigation
    removeLetterFromGuess();
    updateGuessSlots(currentGuess.join(''), attempts); // Update the guess slots with the current attempt
  } else if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
    addLetterToGuess(event.key);
  }
});

// Function to show the "Invalid word" popup
function showInvalidWordPopup(message) {
  let popup = document.createElement('div');
  popup.className = 'popup invalid-word-popup';

  let messageBox = document.createElement('div');
  messageBox.className = 'popup-message';
  messageBox.textContent = message;

  let closeButton = document.createElement('button');
  closeButton.addEventListener('click', function () {
    popup.remove();
  });

  popup.appendChild(messageBox);
  document.body.appendChild(popup);

  setTimeout(function () {
    popup.classList.add('fade-out');
    setTimeout(function () {
      popup.remove();
    }, 300); // Remove the popup after the fade-out animation duration
  }, 3000); // Remove the popup after 3 seconds
}

function showMessage(message, className) {
  let overlay = document.createElement('div');
  overlay.className = 'overlay';

  let messageBox = document.createElement('div');
  messageBox.className = `message-box ${className}`;

  let content = document.createElement('div');
  content.className = 'message-content';
  
  // Calculate the maximum count for scaling the bars
  const maxCount = Math.max(...gameStats.guessDistribution);

  content.innerHTML = `
    <h2>STATISTICS (DAILY)</h2>
    <div class="statistics">
      <div class="stat">
        <div>${gameStats.played}</div>
        <div>Played</div>
      </div>
      <div class="stat">
        <div>${(gameStats.wins / gameStats.played * 100).toFixed(0)}%</div>
        <div>Win %</div>
      </div>
      <div class="stat">
        <div>${(gameStats.totalGuesses / gameStats.wins).toFixed(1)}</div>
        <div>Average Guesses</div>
      </div>
      <div class="stat">
        <div>${gameStats.currentStreak}</div>
        <div>Current Streak</div>
      </div>
      <div class="stat">
        <div>${gameStats.maxStreak}</div>
        <div>Max Streak</div>
      </div>
    </div>
    <h3>GUESS DISTRIBUTION</h3>
    <div class="guess-distribution">
      ${gameStats.guessDistribution.map((count, index) => `
        <div>
          <div class="label">${index + 1}</div>
          <div class="bar" style="width: ${(count / maxCount) * 100}%"></div>
          <div>${count}</div>
        </div>
      `).join('')}
    </div>
    <h3>NEXT WORDLE</h3>
    <div class="next-wordle">10:27:10</div>
  `;

  let buttons = document.createElement('div');
  buttons.className = 'buttons';

  let newGameButton = document.createElement('button');
  newGameButton.textContent = 'New Game';
  newGameButton.addEventListener('click', function () {
    resetGame();
    overlay.remove();
  });

  let viewPreviousButton = document.createElement('button');
  viewPreviousButton.textContent = 'View Previous Game';
  viewPreviousButton.addEventListener('click', function () {
    viewPreviousGame();
    overlay.remove();
  });

  buttons.appendChild(newGameButton);
  buttons.appendChild(viewPreviousButton);

  let closeButton = document.createElement('button');
  closeButton.className = 'close-button';
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', function () {
    overlay.remove();
  });

  messageBox.appendChild(closeButton);
  messageBox.appendChild(content);
  messageBox.appendChild(buttons);

  overlay.appendChild(messageBox);
  document.body.appendChild(overlay);
}


function checkGuess(guess) {
  if (attempts < 6 && !gameWon) {
    let guessRow = guessRows[attempts];
    let guessSlots = guessRow.querySelectorAll('.guess-slot');
    let correctGuesses = 0;
    let correctPositions = 0;
    let correctCounts = {};

    for (let i = 0; i < 5; i++) {
      if (guess.charAt(i) === targetWord.charAt(i)) {
        guessSlots[i].classList.add('green'); // Correct letter in correct position
        correctCounts[guess.charAt(i)] = (correctCounts[guess.charAt(i)] || 0) + 1;
        correctPositions++;
      }
    }

    for (let i = 0; i < 5; i++) {
      if (guess.charAt(i) !== targetWord.charAt(i) && 
          targetWord.includes(guess.charAt(i)) && 
          ((targetWord.split(guess.charAt(i)).length - 1) > (correctCounts[guess.charAt(i)] || 0))) {
        guessSlots[i].classList.add('yellow'); // Correct letter in wrong position
        correctGuesses++;
      } else if (!guessSlots[i].classList.contains('green')) {
        guessSlots[i].classList.add('gray'); // Incorrect letter
      }
    }

    let keyboardKeys = document.querySelectorAll('.key');
    keyboardKeys.forEach(function (key) {
      let letter = key.textContent;
      if (guess.includes(letter)) {
        if (targetWord.includes(letter)) {
          if (guess.indexOf(letter) === targetWord.indexOf(letter)) {
            key.classList.add('green'); // Correct letter in the correct position
          } else {
            key.classList.add('yellow'); // Correct letter in the guessed word, but not in the correct position
          }
        } else {
          key.classList.add('gray'); // Letter is not in the word
        }
      }
    });

    if (correctPositions === 5) {
      gameStats.played++;
      gameStats.wins++;
      gameStats.currentStreak++;
      gameStats.maxStreak = Math.max(gameStats.currentStreak, gameStats.maxStreak);
      gameStats.guessDistribution[attempts]++;
      gameStats.totalGuesses += attempts + 1;
      showMessage('Congratulations, you won!', 'success');
      gameWon = true;
    } else if (attempts === 5) {
      gameStats.played++;
      gameStats.currentStreak = 0;
      showMessage(`Sorry, you lost. The correct word was "${targetWord}".`, 'failure');
    }

    attempts++;
  }
}

// Function to reset the game for a new game
function resetGame() {
  attempts = 0;
  gameWon = false;
  targetWord = validWords[Math.floor(Math.random() * validWords.length)];
  currentGuess.fill(null);

  guessRows.forEach(row => {
    let guessSlots = row.querySelectorAll('.guess-slot');
    guessSlots.forEach(slot => {
      slot.textContent = '';
      slot.className = 'guess-slot';
    });
  });

  let keyboardKeys = document.querySelectorAll('.key');
  keyboardKeys.forEach(key => {
    key.className = 'key';
  });
}

// Placeholder function for viewing previous game
function viewPreviousGame() {
  alert('This feature is not yet implemented.');
}
