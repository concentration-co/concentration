/* eslint-disable no-unused-vars */
'use strict';

var startTime;

// Jen, this start time tells us when we click.

var counter = 0;

// this makes it so that we only set start time once

var arrivedTime = new Date();

// Jen, this start time tells us when we arrive at the page
// Take the final pair time and substract from startTime to get the "score"

console.log('This is when we land on the page but not yet started playing: ' + arrivedTime);


// ====================================Card 5 - Paul====================================

Card.collection = [];

function Card(src, alt, theme) { // Card Constructor must exist (Title, Source - url - front of card , Theme - var - back of card)
  // this.number = number;
  this.picture = src; // this is the picture
  this.theme = theme;
  this.alt = alt;
  Card.collection.push(this);
  // this.deck = []; // all the compiled cards, the "deck", so to speak. Might not need.
}

function shuffle(array) { //shuffle an array. Known as a Knuth Shuffle. Code snippet from https://github.com/Daplie/knuth-shuffle/blob/master/index.js

  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var userFromLocal = localStorage.getItem('userData');
var gamePlayer = JSON.parse(userFromLocal); // -Retrieve and parse User Object from local storage

new Card('img/Larch Tree.jpg', 'Larch Tree', gamePlayer.theme);
new Card('img/PVO Goat 1.jpg', 'White Goat', gamePlayer.theme);
new Card('WA Flag.png', 'WA Flag', gamePlayer.theme);
new Card('img/valentin-petkov-FK5uXiCp9-Q-unsplash.jpg', 'Valentin', gamePlayer.theme);
new Card('img/PVO Goat 5.png', 'Goat', gamePlayer.theme);
new Card('img/WA Silhouette', 'WA', gamePlayer.theme);
new Card('img/anastasiya-romanova-GNVr_d4smK0-unsplash.jpg', 'Berries', gamePlayer.theme);
new Card('img/thomas-lipke-p5nDU-d3Y0s-unsplash.jpg', 'orca', gamePlayer.theme);
new Card('img/thomas-lipke-p5nDU-d3Y0s-unsplash.jpg', 'Tree Silhouette', gamePlayer.theme);
new Card('img/thomas-lipke-p5nDU-d3Y0s-unsplash.jpg', 'White Tree Bark', gamePlayer.theme);
new Card('img/thomas-lipke-p5nDU-d3Y0s-unsplash.jpg', 'White Goad Portrait', gamePlayer.theme);
new Card('img/mathew-schwartz-OjQgsR1oyEw-unsplash.jpg', 'Bald Eagle', gamePlayer.theme);
new Card('img/nathan-dumlao-q55cHiz1reM-unsplash.jpg', 'Deer', gamePlayer.theme);

Card.collection = shuffle(Card.collection);


// -Fill game board with Style and Difficulty settings from User Object
// -Based on Difficulty, fill Array A with Difficulty # of Cards from Card Constructor
// -Fill Array B with an exact copy of Array A cards
// -Pull from Array A & B to fill game grid

// Append name & difficulty & button (Go Home) in a sidebar
// -Preferences will be retrieved from parsed User Object (already destringifyed above)

// TODO: Render a timer that is set to 0:00 and will start upon first click.
// - Timer will be located in the sidebar

// =====================================================================================
// ====================================Card 6 - Rob===========================================

// card flip func:
var cards = document.querySelectorAll('.memory-card');

var hasFlippedCard = false;
var lockBoard = false;
var firstCard, secondCard;

function flipCard() {
  counter++;
  if(counter <= 0){
    window.startTime = {
      start: new Date()
    };
    window.startTime = new Date();
  }
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.nature === secondCard.dataset.nature;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  counter++;

  // Jen, make it so that the counter is what tells you when to go to next page: counter = total pairs to match and when met logic to go to about


  console.log('Game time at this match is: ' + startTime);


  firstCard.removeEventListener('click', flipCard);
  firstCard.classList.add('hide-it');


  secondCard.removeEventListener('click', flipCard);
  secondCard.classList.add('hide-it');

  resetBoard();
}

function unflipCards() {

  console.log('Game time at this not-match is: ' + startTime);

  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

// =====================================================================================
// ====================================Card 7 - Jen===========================================

// Timer stops when the last pair is confirmed as a match and all cards have been removed from gameplay
// -Stop Timer
// -Assign Final Time value to User Object.time
// -Remove event listener (Optional)

// Final time is saved to local storage
// - Stringify and update User Object in local storage

// Users are transported to the final Result Page upon successful completion of the game.
// - document.createElementByID of Anchor Tag to about.js

// https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
// window.location.replace(js/about.js)

// =====================================================================================

