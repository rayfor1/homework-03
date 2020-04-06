// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);




//to generate a random password
function generatePassword(){

  //to set password length:
    var pwLength = prompt("How many characters do you want your password to be? (between 8-128 characters)")

    //possible password values:
    var pwChar = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    var password = "";

    // make a for loop to create a random password (setting the password to the length the user input):
    for(var i = 0; 1 <= pwLength; i++){
      password = password + pwChar.charAt(Math.random() * Math.floor(pwChar.length - 1));
    };

    //add password to text:
    document.getElementById("password").pwChar = password









}