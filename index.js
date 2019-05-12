// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
// Randomly selects a word and uses the `Word` constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses
// `Letter.js` *should not* `require` any other files.
// `Word.js` *should only* require `Letter.js`
// **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`
// **HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: <https://jsbin.com/facawetume/edit?js,console>)

var Word = require("./Word");
var Letter = require("./Letter");
var inquirer = require("./node_modules/inquirer");

var guessesLeft = 10;
var characters = ["mountains"]; //, 'rocky', 'zion', 'glacier','wind cave', 'denali','biscayne','kenai fjords','basin','isle', 'lake']; // array of words to use
var guessedLetters = []; // array of guessed letters
var selectedWord = characters[
  Math.floor(Math.random() * characters.length)
].split("");

var output = [];
for (var i = 0; i < selectedWord.length; i++) {
  output.push(new Letter(selectedWord[i], guessedLetters).reveal());
}

// console.log(new Word(selectedWord, guessedLetters,output));

// var hangman = function () {
// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "Guess a letter",
//       name: "guessedLetter"
//     }
//   ])
//   .then(function(inquirerResponse) {
//     console.log(inquirerResponse.guessedLetter);
//     if (selectedWord.includes(inquirerResponse.guessedLetter)) {
//       console.log("Y");
//       correctGuess();
//     } else {
//       console.log("N");
//       incorrectGuess();
//     }

//     //functions!!!
//     function start() {
//       guessesLeft = 10;
//       guessedLetters = [];
//     }

//     function win() {
//       guessesLeft = 10;
//       guessedLetters = [];
//     }

//     function loss() {
//       guessesLeft = 10;
//       guessedLetters = [];
//     }

//     function correctGuess() {
//       guessedLetters.push(inquirerResponse.guessedLetter);
//     }

//     function incorrectGuess() {
//       guessesLeft--;
//       guessedLetters.push(inquirerResponse.guessedLetter);
//     }
//   });
// }

var hangman = function() {
  if (guessesLeft > 0) {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Guess a letter",
          name: "guessedLetter"
        }
      ])
      .then(function(inquirerResponse) {
        if (selectedWord.includes(inquirerResponse.guessedLetter)) {
          console.log("CORRECT!!!");
          console.log(output);
          guessedLetters.push(inquirerResponse.guessedLetter);
          console.log(guessedLetters);
          hangman();
        } else {
          guessesLeft--;
          console.log("INCORRECT!!!");
          console.log(output);
          console.log(guessesLeft + " guesses remaining!");
          guessedLetters.push(inquirerResponse.guessedLetter);
          console.log(guessedLetters);
          hangman();
        }
      });
  } else {
    console.log("You lost");
    guessesLeft = 10;
    guessedLetters = [];
    inquirer
      .prompt([
        {
          type: "list",
          message: "Play Again?",
          choices: ["Yes", "No"],
          name: "playAgain"
        }
      ])
      .then(function(inquirerResponse) {
        if (inquirerResponse.playAgain === "Yes") {
          hangman();
        } else {
          console.log("Come play again soon!");
        }
      });
  }
};
hangman();
//     inquirer
//       .prompt([
//         {
//           type: "input",
//           message: "Guess a letter!",
//           name: "guessedLetter"
//         }
//       ])
//       .then(function(inquirerResponse) {
//         if (starters.length < 3) {
//           starters.push(player);
//           team.push(player);
//           console.log(player.name + " added to the starters");
//         } else {
//           subs.push(player);
//           team.push(player);
//           console.log(player.name + " added to the subs");
//         }
//         hangman();
//       });
//   } else {
//     for (var i = 0; i < team.length; i++) {
//       team[i].printStats();
//     }

//   }
// };
