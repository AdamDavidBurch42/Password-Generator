// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let charsToUse = "";
  let lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
  let upperCaseChar = lowerCaseChar.toUpperCase();
  let numericChar = "0123456789";
  let specialChar = "!@#$%^&*";

  let passwordLength = prompt("How long a password do you want? Between 8-128.");
  if (!(passwordLength >= 8 && passwordLength <= 128)) {
    return "Bad character count. Between 8 and 128 please!";
  }

  if (confirm("Use lower case characters?")) {
    charsToUse += lowerCaseChar;
  }

  if (confirm("Use upper case characters?")) {
    charsToUse += upperCaseChar;
  }

  if (confirm("Use numbers characters?")) {
    charsToUse += numericChar;
  }

  if (confirm("Use special characters?")) {
    charsToUse += specialChar;
  }

  if(charsToUse.length === 0) {
    return "Must use at least some characters"
  }

  var passwordToUse = ""; 
  for (var i = 0; i < passwordLength; i++) {
    passwordToUse = passwordToUse + charsToUse.charAt(Math.floor(Math.random() * charsToUse.length));
  }
  return passwordToUse;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
