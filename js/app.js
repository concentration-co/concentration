/* eslint-disable no-unused-vars */

'use strict';

// ====================================Card 1 - Paul====================================

// TODO: Render personalized greeting using User Name
// -Check for User object in local storage - if present, destringify to access User Name
// -Stretch: Add option to 'change' user if new player
// -Else: Continue to greeting form

// TODO: Provide a greeting form that can take in a User Name using form validation
// -Target HTML ID _________ where the user name will be entered
// -form validation will prevent blank space only

// TODO: User Name will be saved to local storage
// -new constructor function created for User (User Name / Difficulty Selected / Theme Selected / Final Time ((Array as Stretch Goal)))

// =====================================================================================
// ====================================Card 2 - Rob===========================================

// paul did this for us and thank god (period).

// =====================================================================================
// ====================================Card 3 - Jen===========================================

// TODO: Validation of Form

// TODO: Provide a selector to choose between 2 potential grid sizes
// Done in HTML -Difficulty Selector will be radio style (can only choose 1 option)
// -Target HTML name = 'mode' where the difficulty will be chosen

function assignDifficultyToUser(){

  var difficultyElement = document.getElementsByName('mode');
  for (var i=0; i<difficultyElement.length; i++) {
    if(difficultyElement[i].checked){
      //Assign to User Object;
    }
  }
}

assignDifficultyToUser();
// TODO: Difficulty Selector will default to the ‘easiest’ option if no choice is made.
// -Set default value in Constructor Function

// TODO: Difficulty Selection will be saved to local storage.
// -Will take place with 'Begin the Game' Button actions

// =====================================================================================
// ====================================Card 4 - Paul ===========================================

// TODO: Provide a button with text indicating that it will ‘Begin the Game’
// -Target HTML ID ___________ where the button to begin the game will exist

function User(name, difficulty, theme) {
  this.name = name;
  this.difficulty = difficulty;
  this.theme = theme;
  this.finalTimes = []; // where to collect their times/scores
}

var gameStart = document.getElementById('nameForm');
gameStart.addEventListener('submit', beginningTheGame);
function beginningTheGame(click){
  click.preventDefault();

  var newUsername = click.target.fname.value; // OR User.name = ...
  var newThemeSelect = click.target.theme.value; // OR User.name = ...
  var newDifficultySelect = click.target.mode.value; // OR difficultySelect = ...

  var newUser = new User(newUsername, newDifficultySelect, newThemeSelect);

  var stringifiedUser = JSON.stringify(newUser);
  localStorage.setItem('userData', stringifiedUser);

  alert('Okay ' + newUser.name + ' you are ready to play the game? It starts soon as you push the button!');

  window.location.href = 'game.html';
}

// When selected, 'Begin the Game' button will save all indicated choices to local storage and then move the user to the Game page
// -stringify the User Object
// -set User Object to local storage
// -redirect user to game.html
// =====================================================================================

