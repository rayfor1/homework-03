//to set password length:
var pwLength = prompt("How many characters do you want in your password?")
console.log(pwLength)

if(pwLength >= 8 && pwLength <= 128){
  var charLength = pwLength
}
else {
  alert ("what you entered does not fit the required number of characters")
}


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




var charList = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+?/[]{}";
var tempPW = ""

function generatePassword(pwlength){
  var tempPW = " "
  for(var i = 0; i <= pwLength; i++){
          password = password + charList.charAt(Math.floor(Math.random() * (charList.length - 1)));
  }
  console.log(password)
}










// Assignment Code
var generateBtn = document.querySelector("#generate");

//to generate a random password
function generatePassword(){
    
    //password length:
    // var charLength

    //possible password values:
    var charList = "ABCDEFGHIJKLMNOPQRSTUVWZYZ"
    var numList = "1234567890"
    var symList = "!@#$%^&*()_+";
    var password = "";

    // make a for loop to create a random password (setting the password to the length the user input):
    for(var i = 0; i <= charLength; i++){
      password = password + charList.charAt(Math.floor(Math.random() * Math.floor(charList.length - 1)));

    };
  
    console.log(password)

    //add password to text:
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
    
    }
  }
// Add event listener to generate button
generateBtn.addEventListener("click", password);



  
