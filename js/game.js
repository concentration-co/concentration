/* eslint-disable no-unused-vars */
'use strict';

var startTime;
var endTime;

var stringyUser = localStorage.getItem('userData');
var userData = JSON.parse(stringyUser);

// Jen, this start time tells us when we click.

var clickCounter = 0;
var pairCounter = 0;
var maxPair = 1;
// TODO: currently, maxPair is hard coded for a 6 pair / 12 card board.  will need to make this variable dynamic if/when this changes

// this makes it so that we only set start time once

var arrivedTime = new Date();

// Jen, this start time tells us when we arrive at the page
// Take the final pair time and substract from startTime to get the "score"

console.log('This is when we land on the page but not yet started playing: ' + arrivedTime);


// ====================================Card 5 - Paul====================================

// TODO: Card Constructor must exist (Title, Source - url - front of card , Theme - var - back of card)
// Fill the board with the number and style of cards selected on the landing page
// -Retrieve and parse User Object from local storage
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
  if(clickCounter <= 0){
    // startTime = {
    //   start: new Date()
    // };
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

  // Jen, make it so that the counter is what tells you when to go to next page: counter = total pairs to match and when met logic to go to about

  // JC: Added a second counter and renamed both - clickCounter will capture the start time, pairCounter will log successful matches and max out at all pairs picked, triggering the end of game conditions


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
// -Stop Timer : There is no timer running per se, but a final time is captured and recorded
// -Assign Final Time value to userData.finalTimes - DONE
// -Remove event listener (Optional)
function checkWinCondition(){
// When all pairs are selected (currently hard coded as pairCounter === maxPair) a time stamp is captured
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

