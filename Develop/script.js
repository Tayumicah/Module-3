var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var uppCaseupp = "ABCDEFGHIJKLOMNOPQRSTUVWXYZ";
  var lowerCaselow = "abcdefghijklomnopqrstuvwxyz";
  var specialChar = "!@#$%^&*";
  var number = "0123456789";
  var allChar = uppCaseupp + lowerCaselow + specialChar + number;
  var password = "";

  var uppIndex = Math.floor(Math.random() * uppCaseupp.length);
  password += uppCaseupp.charAt(uppIndex);

  var lowIndex = Math.floor(Math.random() * lowerCaselow.length);
  password += lowerCaselow.charAt(lowIndex);

  var speciIndex = Math.floor(Math.random() * specialChar.length);
  password += specialChar.charAt(speciIndex);

  var numberIndex = Math.floor(Math.random() * number.length);
  password += number.charAt(numberIndex);

  for (let i = 1; i <= 4; i++) {
    var allIndex = Math.floor(Math.random() * allChar.length);
    password += allChar.charAt(allIndex);
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
