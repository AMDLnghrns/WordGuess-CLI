// Contains a constructor, Letter.
// This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore)
// , depending on whether or not the user has guessed the letter.
// That means the constructor should define:

// do we need to make a list of every letter with a true/false object and if it is true, let it be the letter, if it is false, make it an underscore?
// yes, but no. with a constructor, we should be able to build out only the letters in the word with true/false values.
// the second constructor should take the first constructor and feed the word that is in question through it to build out a list of underscored values to display
// the third file should use the constructors to play the game


//var word0 = characters; // should be the chosen word for this particular game randomized from a separate list from a different module
//var word1 = word0.split(""); // the word from word0 split up into individual letters in an array
//var word3 = new Letter(); // 

function Letter(i) {
  this.character = i;
  this.guessed = this.character === process.argv[3]; //will need to replace process.argv[3] with the array of guessed letters and adjust to .includes // A boolean value that stores whether that letter has been guessed yet
}
Letter.prototype.reveal = function() {
  if (!this.guessed) {
    return "_";
  } else {
    return this.character;
  }
};

// console.log(word2.reveal());

// exporting our Letter constructor output
module.exports = Letter;
