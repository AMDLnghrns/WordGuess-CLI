// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
// Randomly selects a word and uses the `Word` constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses
// `Letter.js` *should not* `require` any other files.
// `Word.js` *should only* require `Letter.js`
// **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`
// **HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: <https://jsbin.com/facawetume/edit?js,console>)

// var Word = require('./Word');
// var Letter = require("./Letter");
var inquirer = require("./node_modules/inquirer");

inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "Guess a letter",
      name: "guessedLetter"
    }
  ])
  .then(function(inquirerResponse) {
    // 
    if (inquirerResponse.guessedLetter) {
      console.log("IF: " + inquirerResponse.guessedLetter + "\n");
    }
    else {
      console.log("\nELSE: " + inquirerResponse.username + "\n");
    }
  });





// function start() {
//   guessesLeft = 10;
// };

// function win() {
//     guessesLeft = 10;
// };

// function loss() {
//     guessesLeft = 10;
// };

// function correctGuess () {
    
// };

// function incorrectGuess () {
//     guessesLeft--;
// };
