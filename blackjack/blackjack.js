const dealButton = document.getElementById('deal');
const hitButton = document.getElementById('hit');
const standButton = document.getElementById('stand');
const table = document.querySelector('.table');
const dealSound = document.getElementById('dealSound');
const winSound = document.getElementById('winSound');
const loseSound = document.getElementById('loseSound');
const tieSound = document.getElementById('tieSound');

dealButton.addEventListener('click', deal);
hitButton.addEventListener('click', hit);
standButton.addEventListener('click', stand);

let playerHand = [];
let dealerHand = [];

function deal() {
    // Clear hands
    clearHands();

    // Disable deal button immediately to prevent subsequent clicks
    dealButton.disabled = true;

    // Hide deal button
    dealButton.style.visibility = 'hidden';
    dealButton.style.opacity = '0';

    // Show hit and stand buttons
    hitButton.style.visibility = 'visible';
    standButton.style.visibility = 'visible';

    setTimeout(() => {
        hitButton.style.opacity = '1';
        standButton.style.opacity = '1';
    }, 10);

    // Play deal sound
    playSound(dealSound);

    // Deal two cards to player and dealer
    playerHand.push(dealCard());
    playerHand.push(dealCard());

    dealerHand.push(dealCard());
    dealerHand.push(dealCard());

    // Display cards on the table
    displayHands();

    // Assuming your card dealing animation takes 2 seconds
    // Re-enable deal button after all animations and logic are done
    setTimeout(() => {
        dealButton.disabled = false;
    }, 2000);
}

function hit() {
    playerHand.push(dealCard());

    // Before appending the new card, remove the existing player's hand from the table
    const existingPlayerHandElement = document.querySelector('.player-hand');
    if (existingPlayerHandElement) {
        existingPlayerHandElement.remove();
    }

    // Now display the updated player's hand with the new card
    const playerHandElement = createHandElement(playerHand, 'Player', 'hit');
    table.appendChild(playerHandElement);

    if (calculateHandValue(playerHand) > 21) {
        determineWinner();
        hitButton.style.opacity = '0';
        hitButton.style.visibility = 'hidden';
        standButton.style.opacity = '0';
        standButton.style.visibility = 'hidden';
        dealButton.style.opacity = '1';
        dealButton.style.visibility = 'visible';
    } else if (calculateHandValue(playerHand) === 21) { // Automatically stand if player hits 21
        stand();
    }
}


function stand() {
    // Player's turn is over; now, it's the dealer's turn.
    // Immediately reveal the hidden card
    revealDealerHiddenCard();

    // Delay a bit before the dealer starts taking more cards
    setTimeout(() => {
        while (calculateHandValue(dealerHand) < 17) {
            dealerHand.push(dealCard());
            
            // Provide a delay before showing the new card on the display
            setTimeout(() => {
                updateDealerDisplay();
            }, 1000);
        }

        // After the dealer's actions are done, determine the winner
        setTimeout(() => {
            determineWinner();
        }, 1000);
    }, 1000);
}

function dealerDrawsCards() {
    if (calculateHandValue(dealerHand) < 17) {
        dealerHand.push(dealCard());

        // Update the dealer's display
        const existingDealerHandElement = document.querySelector('.dealer-hand');
        if (existingDealerHandElement) {
            existingDealerHandElement.remove();
        }

        const dealerHandElement = createHandElement(dealerHand, 'Dealer', 'hit');
        table.appendChild(dealerHandElement);

        // Add delay between card draws
        setTimeout(dealerDrawsCards, 1000); 
    } else {
        determineWinner();
        hideButtons();
    }
}

function hideButtons() {
    hitButton.style.opacity = '0';
    hitButton.style.visibility = 'hidden';
    standButton.style.opacity = '0';
    standButton.style.visibility = 'hidden';
    dealButton.style.opacity = '1';
    dealButton.style.visibility = 'visible';
}

  setTimeout(() => {
    hitButton.style.visibility = 'hidden';
    standButton.style.visibility = 'hidden';

    dealButton.style.visibility = 'visible';
    dealButton.style.opacity = '1';
  }, 500);

function dealCard() {
  // Generate a random card (simplified)
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  return { suit: randomSuit, value: randomValue };
}

function calculateHandValue(hand) {
  let value = 0;
  let hasAce = false;

  for (const card of hand) {
    if (card.value === 'A') {
      hasAce = true;
    }
    value += cardValue(card.value);
  }

  if (hasAce && value <= 11) {
    value += 10; // Count Ace as 11 if possible
  }

  return value;
}

function showMessage(message) {
    const messageElement = document.getElementById('message');
  
    // Reset opacity and animation properties
    messageElement.style.opacity = '1';
    messageElement.style.animation = 'fade 4s forwards';

    messageElement.textContent = message;
    messageElement.style.display = 'flex'; // Use 'flex' to center the content
  
    // After the fade-in animation ends, start the fade-out animation
    setTimeout(() => {
        messageElement.style.animation = 'fade-out 5s forwards';
    }, 4000); // 4 seconds is the duration of the fade-in animation
}

function hideMessage() {
    const messageElement = document.getElementById('message');
    messageElement.style.animation = ''; // Remove the animation so it doesn't interfere when we want to show the message again
    messageElement.style.opacity = '0'; // Set opacity to 0 instead of changing display property
}

function cardValue(card) {
  if (card === 'A') return 1;
  if (['K', 'Q', 'J'].includes(card)) return 10;
  return parseInt(card, 10);
}

function clearHands() {
    playerHand = [];
    dealerHand = [];
    
    const hands = document.querySelectorAll('.hand'); // Select all hand elements
    hands.forEach(hand => hand.remove()); // Remove each hand element
  }

  function displayHands(hideDealerSecondCard = false, animationType = 'deal') {
    // Clear previous hands
    const hands = document.querySelectorAll('.hand');
    hands.forEach(hand => hand.remove());
  
    // Display current hands
    const playerHandElement = createHandElement(playerHand, 'Player', animationType);
    const dealerHandElement = createHandElement(dealerHand, 'Dealer', hideDealerSecondCard, animationType);
  
    // Append hands to the table
    table.appendChild(playerHandElement);
    table.appendChild(dealerHandElement);
}
  
function createHandElement(hand, owner, animationType) {
    const handElement = document.createElement('div');
    handElement.classList.add('hand', `${owner.toLowerCase()}-hand`);

    for (const [index, card] of hand.entries()) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        // For dealer, the second card should be hidden initially, but only if the dealer has exactly two cards
        if (owner === 'Dealer' && index === 1 && hand.length === 2) {
            cardElement.dataset.hiddenCard = `${card.value}_of_${card.suit}`;  // Store the card info to be used later
            cardElement.style.backgroundImage = `url('/blackjack/img/PlayingCards/card-back.png')`;
            cardElement.classList.add('hidden');
        } else {
            cardElement.style.backgroundImage = `url('../blackjack/img/PlayingCards/${card.value}_of_${card.suit}.png')`;
        }

        // Use slide animation for initial deal or flip for hits based on animationType
        if (animationType === 'hit' && index === hand.length - 1) {
            cardElement.style.animation = 'card-flip 1s forwards';
        } else {
            cardElement.style.animation = 'card-slide-in 1s forwards';
        }

        handElement.appendChild(cardElement);
    }

    return handElement;
}





function revealDealerHiddenCard() {
    const hiddenCard = dealerHand[1];
    const hiddenCardElement = document.querySelector('.dealer-hand .card.hidden');
    
    if (hiddenCardElement) {
        hiddenCardElement.style.backgroundImage = `url('../blackjack/img/PlayingCards/${hiddenCard.value}_of_${hiddenCard.suit}.png')`;
        hiddenCardElement.classList.remove('hidden');
    }
}

function updateDealerDisplay() {
    const existingDealerHandElement = document.querySelector('.dealer-hand');
    if (existingDealerHandElement) {
        existingDealerHandElement.remove();
    }

    const dealerHandElement = createHandElement(dealerHand, 'Dealer', 'hit');
    table.appendChild(dealerHandElement);
}
  
  function displayHand(hand, owner, handElement) {
    let delay = 0;
  
    for (const card of hand) {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.textContent = `${card.value} of ${card.suit}`;
      cardElement.style.animationDelay = `${delay}s`; // Add animation delay
  
      handElement.appendChild(cardElement);
  
      delay += 0.5; // Delay between cards for animation
    }
  }
  

function playSound(soundElement) {
  soundElement.currentTime = 0; // Rewind to start
  soundElement.play();
}

function determineWinner() {
    const playerValue = calculateHandValue(playerHand);
    const dealerValue = calculateHandValue(dealerHand);

    if (playerValue > 21) {
        showMessage('Player busts! Dealer wins.');
    } else if (dealerValue > 21) {
        showMessage('Dealer busts! Player wins.');
    } else if (playerValue > dealerValue) {
        showMessage('Player wins!');
    } else if (playerValue < dealerValue) {
        showMessage('Dealer wins.');
    } else {
        showMessage('It\'s a tie!');
    }

    setTimeout(() => {
        hideMessage();
        hideButtons();
        
        // Re-enable the deal button after all game logic is complete
        dealButton.disabled = false;
    }, 1000);
}