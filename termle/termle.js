// List of valid words
import { validWords } from './valid_words.js';

  let targetWord = validWords[Math.floor(Math.random() * validWords.length)];
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
  
  inputField.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      let guess = inputField.value;
      if (guess.length !== 5) {
        alert('Please enter a word with exactly 5 letters.');
      } else if (validWords.includes(guess)) {
        updateGuessSlots(guess); // Update the guess slots
        checkGuess(guess);
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
      alert('Congratulations, you won!');
    } else if (attempts === 5) {
      alert(`Sorry, you lost. The correct word was "${targetWord}".`);
    }
  
    inputField.value = ''; // Clear the input field
  }
  