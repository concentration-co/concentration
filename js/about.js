'use strict';
// ====================================Card 8 - Jen===========================================

// TODO: Fill results will display the User Name, Difficulty, and Final Time
displayResults();

function displayResults(){


  // -Destringify User Object from local storage
  var stringyUser = localStorage.getItem('userData');
  var userData = JSON.parse(stringyUser);

  // -Parse User Object from local storage to access User Name, Difficulty and Time
  var name = userData.name;
  var mode = userData.difficulty;
  var score = userData.finalTimes[0] + ' seconds';
  console.log('User Data Accessed:', name +' '+ mode +' '+ score);

  mode = mode.charAt(0).toUpperCase() + mode.slice(1); // ensures uppercasing of first letter

  // -Add relevant content to results form on about.html
  var targetName = document.getElementById('resultName');
  targetName.innerHTML='';
  var nameText = document.createElement('p');
  nameText.textContent= name;
  targetName.appendChild(nameText);

  var targetMode = document.getElementById('resultMode');
  targetMode.innerHTML='';
  var modeText = document.createElement('p');
  modeText.textContent= mode;
  targetMode.appendChild(modeText);

  var targetTime = document.getElementById('resultScore');
  targetTime.innerHTML='';
  var timeText = document.createElement('p');
  timeText.textContent= score;
  targetTime.appendChild(timeText);

}

// TODO:A ‘Play Again’ Option will display beneath the results that - if clicked - will link back to the landing page.
// Use same button as in game.js => Anchor Tag to index.html


// =====================================================================================
// ====================================Card 9 - Paul===========================================

// TODO: Results page will include an 'About Me' sidebar that will display images and names of all 3 collaborators


// When clicked, each image/name will expand to display text of a personalized ‘About Me’ written by that collaborator.
//- Only one full ‘About Me’ text can be displayed at a given time - clicking on a different picture will replace the current text with the newly selected text
