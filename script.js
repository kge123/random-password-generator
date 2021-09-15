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
  var choices =[lowerCase, upperCase, numbers, specialCharacters]
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var numbers = '0123456789'
  var specialCharacters = ' !"#$%&()*+,-.:;<=>?@[]`_^{}|~'
  // Confirm box for lowercase letters included or not
  var lowercaseCharacter = confirm('Do you want lowercase letters included in your password? OK=Yes Cancel=No')
  if (lowercaseCharacter){
    choices += lowerCase;
  }
  // Confirm box for uppercase letters included or not
  var uppercaseCharacter = confirm('Do you want uppercase letters included in your password? OK=Yes Cancel=No')
  if (uppercaseCharacter){
    choices += upperCase;
  }
  // Confirm box for numerals to be included or not 
  var numberCharacter = confirm('Do you want numerals included in your password? OK=Yes Cancel=No')
  if (numberCharacter){
    choices += numbers;
  }
  // Confirm box for special characters included or not 
  var specialCharacterscharacter = confirm('Do you want special characters included in your password? OK=Yes Cancel=No')
  if (specialCharacterscharacter){
    choices += specialCharacters;
  }

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
