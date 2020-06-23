'use strict';

// TODO: Card Constructor must exist (Source - url - front of card , Theme - var - back of card)

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

TODO: // Timer begins counting when the first card is clicked
// -Add Event Listener that targets 'click' on any card
// -IF timer is not running && click occurs && pairs remain in play, Turn On Timer
// -Else IF timer IS running && click occurs && NO pairs remain in play, Turn Off Timer
// -Not Necessary Yet: Else if timer IS running & click occurs && pairs remain in play, nothing happens

TODO: // When first card is clicked, card is ‘flipped’ to display the content (but no match is checked)
// -Add Event Listener on 'click' on any card => Card Flips

TODO: // When a second card is clicked, card is ‘flipped’ to display the content && a match between the first and second card is checked for

TODO: // IF the two flipped cards are a match, both cards are removed from gameplay

TODO: // IF the two flipped cards are NOT a match, both cards will flip back to their original state and will remain a part of the game

TODO: // Timer stops when the last pair is confirmed as a match and all cards have been removed from gameplay

TODO: // Final time is saved to local storage

TODO: // Users are transported to the final Result Page upon successful completion of the game.