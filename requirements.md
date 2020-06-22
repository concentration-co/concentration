var Contributors = ‘Jennifer Chinzi’ && ‘Paul O’Brien’ && ‘Robert Rizo’ && ‘Colleen Sexton’

## Project Vision:

We want to create a game of concentration. An intro page will allow the user to customize elements of the game. The game itself will display a set number of cards that will reveal their faces when clicked (2 per round). If images match, those two cards will be eliminated from the game. The game is over when all cards are matched. The final page will display scores (time it took from initial click to finish the game). The final page will also include an ‘About Me’ segment with brief bios of all team members

## What Problem or Pain Point does it solve?

This site will solve the problem of boredom in the time of pandemics! It will also provide a chance for users to improve their skills at this game by displaying past performance metrics.

## Why should we care about your product?

Our project is a cumlimation of our group's mastery of JavaScript. We are proud to showcase our skills and teamworking abilities. You might also have fun playing the game.

## IN - What will your product do
 - Give a user a chance to choose the theme of their cards
 - Allow the user to provide ther name for a personlized experience
 - Show the user their "score"-how much time elapsed to solve
 
 ## OUT - What will your product not do
 - Not be optimized for mobile applications
 - There will be no collection of others' scores
 
 ## MVP
 - The home page will have a place to enter the user name and two toggle choices. One for the card back and one for how many cards wil be in the grid.
 - The game page will have the cards, and a timer that starts when the first card is clicked and ends when the lst pair is made.
 - The score page will diplay the time that it took for a player to complete the immediatley preceding game. 
 - The score page will also have a picture of each of the team members with a popout that has some information about that person.
 
 ## Stretch Goals
 - Additonal style choices for the cards
 - Toggle visibility of timer while playing the game 
 - Display past game scores from local storage
 - More than two choices for game grid layout, i.e., more cards in the grid

## What stretch goals are you going to aim for?

## Functional Requirements

A user can enter their name.
A user can choose what theme their cards will have from a limited selection.

## Data Flow

The user enters the home page and is presented with a place to enter their name and to choose a theme for the virtaul cards they will be controlling.
After making their choices, they will be automatically sent to the second page where there will be a brief explanation of how the game works. The game will start whe the user clicks on the first card, and ends when the last pair is matched. For every correct match, both cards will go away leaving an empty spot with a placeholder.
When the game is over, the user has the option to navigate to the score page that will display the time the elapsed while they played. There will also be a sidebar with images of all each of the four contributors and an option for the user to learn more about each by clicking on their images. 
