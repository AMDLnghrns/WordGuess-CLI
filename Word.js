// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the
//     current word the user is attempting to guess. That means the constructor should define:

var Letter = require("./Letter");

var characters = ["mountains"]; //, 'rocky', 'zion', 'glacier','wind cave', 'denali','biscayne','kenai fjords','basin','isle', 'lake'];
var selectedWord = characters[Math.floor(Math.random() * characters.length)].split("");
// var guessedLetters = ["m", "n", "t", "a", "i"];
var guessedLetters = [];

var output = [];

for (var i = 0; i < selectedWord.length; i++) {
  output.push(new Letter(selectedWord[i], guessedLetters).reveal());
}
// console.log(output);

var Word = function(selectedWord,guessedLetters,output) {
  this.letterObj = selectedWord; // An array of `new` Letter objects representing the letters of the underlying word
  this.stringIt = output;
//   this.stringIt = function(selectedWord, guessedLetters) {
//     var output = [];
//     for (var i = 0; i < selectedWord.length; i++) {
//       output.push(new Letter(selectedWord[i], guessedLetters).reveal());
//     }
//     return output;
//   };
};

// console.log();
// Word.prototype.makeLetObjs = function (params) {
//     selectedWord.forEach(function(elem){
//         letter(elem);
//         console.log(elem);
//     })
// }
// console.log(new Word(selectedWord, guessedLetters));
console.log(new Word(selectedWord, guessedLetters,output).stringIt);

// exporting our Word constructor
module.exports = Word;
