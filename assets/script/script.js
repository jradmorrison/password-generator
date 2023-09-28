// =================== Global Variables ====================================================================================
const letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "_", "=", "+", ";", ".", "/", ","];

var generateBtn = document.querySelector("#generate");
var pwArr = [];
var pw = [];
var finalPass = ""


function generatePassword() {

  // Runs a function to clear arrays for reusability 
  clearArr()

  // Prompts for desire password length
  let length = window.prompt(`How many characters would you like your password to be? (8-128)`);
  console.log(length);

  // Confirm for upper case letters & Alerts if pw length selection was < 8 || > 128 characters
  if (length >= 8 && length <= 128) {
    var uCase = window.confirm(`Do you want it to contain upper case letters?`);
  } else {
    window.alert(`Password has to be between 8-128 characters!`);
    return;
  }
  console.log(uCase);

  if (uCase == true) {
    pwArr = pwArr.concat(letterUpper);
    console.log(pwArr);
  }

  // Confirm for lower case letters
  var lCase = window.confirm(`Do you want it to contain lower case letters?`)
  console.log(lCase);
  if (lCase == true) {
    pwArr = pwArr.concat(letterLower);
    console.log(pwArr)
  }

  // Confirm for numbers
  var num = window.confirm(`Do you want it to contain numbers?`)
  console.log(num);
  if (num == true) {
    pwArr = pwArr.concat(numbers);
    console.log(pwArr)
  }

  // Confirm for special characters
  var spChar = window.confirm(`Do you want it to contail special characters?`)
  console.log(spChar);
  if (spChar == true) {
    pwArr = pwArr.concat(specialCharacters)
    console.log(pwArr);
  }

  // Alerts if no character types were selected
  if (uCase == false && lCase == false && num == false && spChar == false) {
    window.alert(`Atleast one type of character has to be selected!`)
    return;
  }
  
  // For loop to add characters to [pw]
  for (let index = 0; index < length; index++) {
    pw.push(pwArr[Math.floor(Math.random() * pwArr.length)]);
  }
  console.log(pw);

  // creates new string from pw array
  finalPass = pw.join('')
  console.log(finalPass);

return;
}

function clearArr() {
  pw = [];
  pwArr = [];
  finalPass = [];
  console.log(pw, pwArr, finalPass,);
  return;
}


// Write password to the #password input
function writePassword() {
  
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
