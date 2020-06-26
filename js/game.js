/* eslint-disable no-unused-vars */
'use strict';

var startTime;
var endTime;


// Jen, this start time tells us when we click.

var clickCounter = 0;
var pairCounter = 0;

// This start time tells us when we arrive at the page
var arrivedTime = new Date();


console.log('This is when we land on the page but not yet started playing: ' + arrivedTime);


// ====================================Card 5 - Paul====================================

// Card Constructor must exist (Title, Source - url - front of card , Theme - var - back of card) // Wrapped into other functions


var stringyUser = localStorage.getItem('userData');
var userData = JSON.parse(stringyUser);

var userName = userData.name;
var mode = userData.difficulty;
var theme = userData.theme;

// -Fill game board with Style and Difficulty settings from User Object: Wrapped into other functions
// -Based on Difficulty, fill Array A with Difficulty # of Cards from Card Constructor: went different direction for logic, no long needed.

// -Fill Array B with an exact copy of Array A cards: went different direction for logic, no long needed.
// -Pull from Array A & B to fill game grid // went different direction for logic, no long needed.

// Append name & difficulty & button (Go Home) in a sidebar

var sidebarUsername = document.getElementById('name');
sidebarUsername.textContent = userName;

var sidebarDifficulty = document.getElementById('mode');
sidebarDifficulty.textContent = mode;

// -Preferences will be retrieved from parsed User Object - DONE already destringifyed above)

// TODO: Render a timer that is set to 0:00 and will start upon first click.
// - Timer will be located in the sidebar

// =====================================================================================
// ====================================Card 6 - Rob===========================================

var allCards = document.querySelectorAll('.memory-card');
for (var i = 0; i < allCards.length; i++){
  allCards[i].classList.add('never-show');
}

// Mode Selection applied to deck=======================
if (mode === 'easy'){
  var cards = document.querySelectorAll('.easy');
  var cardsDisplayed = 12;
  var maxPair = 6;
} else if (mode === 'normal'){
  cards = document.querySelectorAll('.normal');
  cardsDisplayed = 16;
  maxPair = 8;
} else if (mode === 'hard'){
  cards = document.querySelectorAll('.hard');
  cardsDisplayed = 20;
  maxPair = 10;
}

// Theme Selection applied to deck=========================


function setThemeRed(){
  for (var i = 0; i<cards.length; i++){
    cards[i].lastElementChild.src = 'img/red.jpg';
  }
}

function setThemeBlue(){
  for (var i = 0; i<cards.length; i++){
    cards[i].lastElementChild.src = 'img/blue.jpg';
  }
}

if (theme === 'red'){
  setThemeRed();
} else if (theme === 'blue'){
  setThemeBlue();
}

// Display Active Cards=====================================

for (i = 0; i < cards.length; i++){
  cards[i].classList.remove('never-show');
}

// Card Flip Function========================================

var hasFlippedCard = false;
var lockBoard = false;
var firstCard, secondCard;

function flipCard() {
  if(clickCounter <= 0){
    startTime = new Date();
    console.log('Start Time:', startTime);
    clickCounter++;
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
  checkWinCondition();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.nature === secondCard.dataset.nature;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  pairCounter++;
  // pairCounter will count increase with each successful match until it reaches maxPair for the chosen mode

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
    let randomPos = Math.floor(Math.random() * cardsDisplayed);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

// =====================================================================================
// ====================================Card 7 - Jen===========================================

function checkWinCondition(){
// When all pairs are selected (pairCounter === maxPair, based on mode)
  if (pairCounter === maxPair){
    endTime = new Date();
    console.log('End Time:', endTime);
  }
  // Once the end time is captured, a 'score' is deduced by extracting and comparing time codes and converting from milliseconds to seconds.  That value in seconds is added to the userData object
  if (endTime) {
    var numStartTime = startTime.getTime();
    var numEndTime = endTime.getTime();
    var elapsedTime = numEndTime-numStartTime;
    var timeInSec = elapsedTime/1000;
    console.log('Elapsed Time:', timeInSec);
    userData.finalTimes.push(timeInSec);
    // At this point, we have updated all necessary userData information and are ready to re-stringify it and send it back to local storage
    stringyUser = JSON.stringify(userData);
    localStorage.setItem('userData', stringyUser);
    // And now we send the user on to the About Me page to view their results
    window.location.href = 'about.html';
  }
}
// =====================================================================================

