// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function generatePassword
//Add lowercase, uppercase, numerals, and special character variables
function generatePassword() {
  var choices = "";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = '!"#$%&()*+,-.:;<=>?@[]`_^{}|~';
  // Add prompt before confirm boxes for amount of characters used for password *between 8 & 128
  var passwordLength = prompt(
    "How many characters would you like to use for your password? Between 8 & 128 characters"
  );
  passwordLength = parseInt(passwordLength);
  if (isNaN(passwordLength)) {
    alert("Please enter a number");
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number betweeen 8 and 128");
    return;
  }
  // Confirm box for lowercase letters included or not
  var lowercaseCharacter = confirm(
    "Do you want lowercase letters included in your password? OK=Yes Cancel=No"
  );
  if (lowercaseCharacter) {
    choices += lowerCase;
  }
  // Confirm box for uppercase letters included or not
  var uppercaseCharacter = confirm(
    "Do you want uppercase letters included in your password? OK=Yes Cancel=No"
  );
  if (uppercaseCharacter) {
    choices += upperCase;
  }

  // Confirm box for numerals to be included or not
  var numberCharacter = confirm(
    "Do you want numerals included in your password? OK=Yes Cancel=No"
  );
  if (numberCharacter) {
    choices += numbers;
  }

  // Confirm box for special characters included or not
  var specialCharacterscharacter = confirm(
    "Do you want special characters included in your password? OK=Yes Cancel=No"
  );
  if (specialCharacterscharacter) {
    choices += specialCharacters;
  }
  //if no to all of the confirms, alert error, exit function
  if (
    !lowercaseCharacter &&
    !uppercaseCharacter &&
    !numberCharacter &&
    !specialCharacterscharacter
  ) {
    alert("Please choose at least one character type before continuing");
    return "Error, please restart the process from beginning and choose at least one character";
  }
  //build the password
  var randomPassword = "";
  //choices[Math.floor(Math.random) * choices.length]
  for (let i = 1; i <= passwordLength; i++) {
    var randomCharacter =
      choices[Math.floor(Math.random() * choices.length - 1)];
    randomPassword += randomCharacter;
  }
  return randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
