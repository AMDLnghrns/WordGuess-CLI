// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the 
//     current word the user is attempting to guess. That means the constructor should define:
    
    //A function that returns a string representing the word. This should call the function on each letter object 
    //-(the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

    //A function that takes a character as an argument and calls the guess function on each letter object (the second function 
    //-defined in `Letter.js`)



    var LETTER = require("./Letter");


    var letter = new Letter();
    var characters = ['mountains']; //, 'rocky', 'zion', 'glacier','wind cave', 'denali','biscayne','kenai fjords','basin','isle', 'lake'];
    var selectedWord = characters[Math.floor(Math.random() * characters.length)].split("");
    console.log(selectedWord);

    var Word = function(x, y, z) {
        this.letterObj = []; //An array of `new` Letter objects representing the letters of the underlying word
        this.stringIt = function (params) {
            
        }
    

        
    };
      
    Word.prototype.makeLetObjs = function (params) {
        selectedWord.forEach(function(elem){
            letter(elem);
            console.log(elem);
        })
    }



    // exporting our Word constructor
    // module.exports = Word;




    //MAYBE: loop through the selected word and create an object with letter.js for each character
    
