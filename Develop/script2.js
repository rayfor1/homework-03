
//I HAD NO IDEA WHAT TO DO WITH THIS....:
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

//START FROM HERE:
// initial prompt for password length:
var pwLength = prompt("How many characters do you want in your password (between 8-128 characters?")
console.log(pwLength)

if(pwLength >= 8 && pwLength <= 128){
  var charLength = pwLength
}
else {
  alert ("what you entered does not fit the required number of characters")
}

//Variables for all possible characters to be generated
var charList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numList = "0123456789";
var symList = "!@#$%^&*=-_{}[]();+<>";

/*Organized my variables that will obtain info from the HTML 
    (I didn't understand the jQuery that was given, used what we learned in class instead)*/

var charLength = document.getElementById("charLength");
var numCheck = document.getElementById("number");
var symCheck = document.getElementById("symbol");
var generate = document.getElementById("generate");
var userPassword = document.getElementById("password");

// to be ran when "Generate Password" button is clicked 
generate.addEventListener("click",function(e){
    var character = charList;
    //if user asked for numbers in the HTML (will add numbers to the password along with alphabet characters):
    (numCheck.checked)? character += numList : "";

    //if user asked for symbols in the HTML (will add strings to the password along with random characters):
    (symCheck.checked)? character += symList : "";
    userPassword.value = password(charLength.value, character);
    }
);
//function to generate random password :
function password(length, character){
        var pwd = "";
        
    // make a for loop to create the string for random password (setting the password to the length the user submitted):
    for(var i = 0; i < length; i++){
    		pwd += character.charAt(Math.floor(Math.random() * character.length));
    }
    return pwd;
}