var Letter = require("./Letter");

//setup constructor called "Word"
function Word() {
  //inside we'll need an array that will house the "new Letter" objects. 1 object will be for one
  //--letter of the selected word
   this.letterObjs = [];
  //make a function that returns the string representation of the selected word.
  //--it will call the "reveal" function from Letter.js and on incorrect/no guess display a "_"
  //---on a correct guess it will replace the "_" with the correct letter and display to the user
  this.strVal = function() {
    Letter.reveal();
  };
  //make a function that takes a character as an argument and calls the guess function from Letter.js on each letter object
  this.guessed = function(char) {
    this.letterObjs.forEach(function() {
      Letter.userInput(char);
    });
  };
  //function that loops through "selectedWord"
  this.makeWord = function(selectedWord) {
    selectedWord.forEach(function(element) {
      this.letterObjs.push(new Letter(element));
    });
  };
}
module.exports = Word;

// // var guessedLetters = ["m", "n", "t", "a", "i"];
// var guessedLetters = [];

// var output = [];

// for (var i = 0; i < selectedWord.length; i++) {
//   output.push(new Letter(selectedWord[i], guessedLetters).reveal());
// }
// // console.log(output);

// var Word = function(selectedWord, guessedLetters, output) {
//   this.letterObj = selectedWord; // An array of `new` Letter objects representing the letters of the underlying word
//   this.stringIt = output;
//   //   this.stringIt = function(selectedWord, guessedLetters) {
//   //     var output = [];
//   //     for (var i = 0; i < selectedWord.length; i++) {
//   //       output.push(new Letter(selectedWord[i], guessedLetters).reveal());
//   //     }
//   //     return output;
//   //   };
// };

// // console.log();
// // Word.prototype.makeLetObjs = function (params) {
// //     selectedWord.forEach(function(elem){
// //         letter(elem);
// //         console.log(elem);
// //     })
// // }
// // console.log(new Word(selectedWord, guessedLetters));
// console.log(new Word(selectedWord, guessedLetters, output).stringIt);

// exporting our Word constructor
