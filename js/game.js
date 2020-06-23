'use strict';

// ====================================Card 5====================================

// TODO: Card Constructor must exist (Title, Source - url - front of card , Theme - var - back of card)

TODO: // Fill the board with the number and style of cards selected on the landing page
// -Retrieve and parse User Object from local storage
// -Fill game board with Style and Difficulty settings from User Object
// -Based on Difficulty, fill Array A with Difficulty # of Cards from Card Constructor
// -Fill Array B with an exact copy of Array A cards
// -Pull from Array A & B to fill game grid

TODO: // Append name & difficulty & button (Go Home) in a sidebar
// -Preferences will be retrieved from parsed User Object (already destringifyed above)

// TODO: Render a timer that is set to 0:00 and will start upon first click.
// - Timer will be located in the sidebar

// =====================================================================================
// ====================================Card 6===========================================

TODO: // Timer begins counting when the first card is clicked
// -Add Event Listener that targets 'click' on any card
// -IF timer is not running && click occurs && pairs remain in play, Turn On Timer
// -Else IF timer IS running && click occurs && NO pairs remain in play, Turn Off Timer
// -Not Necessary Yet: Else if timer IS running & click occurs && pairs remain in play, nothing happens

TODO: // When first card is clicked, card is ‘flipped’ to display the content (but no match is checked)
// -Target clicked card and 'flip' targeted card to display front of card rather than back of card
// -Check to see if 'Card Check' var has a value.  (On a first click, var 'Card Check' should be empty)
// -If empty, assign 'Title' of targeted card to var 'Card Check' for future comparison

TODO: // When a second card is clicked, card is ‘flipped’ to display the content && a match between the first and second card is checked for
// -Call 'flip card' function on newly selected card
// -Check to see if 'Card Check' var has a value.  (On a second click, var 'Card Check' should contain a value)

TODO: // IF the two flipped cards are a match, both cards are removed from gameplay
// -Set display of matched cards to invisible, or otherwise remove from game without changing layout of remaining cards

TODO: // IF the two flipped cards are NOT a match, both cards will flip back to their original state and will remain a part of the game
// -Undo the flip function

// =====================================================================================
// ====================================Card 7===========================================

TODO: // Timer stops when the last pair is confirmed as a match and all cards have been removed from gameplay
// -Stop Timer
// -Assign Final Time value to User Object.time
// -Remove event listener (Optional)

TODO: // Final time is saved to local storage
// - Stringify and update User Object in local storage

TODO: // Users are transported to the final Result Page upon successful completion of the game.
// - document.createElementByID of Anchor Tag to about.js

// =====================================================================================
