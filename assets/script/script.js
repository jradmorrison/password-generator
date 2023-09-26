// Arrays
const lUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const spChar = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "_", "=", "+", ";", ".", "/", ","];



// Assignment Code
var generateBtn = document.querySelector("#generate");
let pwArr = [];
let pwObject = {};
let pw = [];

// Prompt for password length (8-128) || Alert if not valid
//Prompt for upper case => passwordArray
//Prompt for lower case => passwordArray
//Prompt for numbers => passwordArray
//Prompt for special characters => passwordArray


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
