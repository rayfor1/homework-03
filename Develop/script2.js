
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



var charList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numList = "0123456789";
var symList = "!@#$%^&*=-_{}[]();+<>";

var charNum = document.getElementById("charNum");
var numCheck = document.getElementById("number");
var symCheck = document.getElementById("symbol");
var submit = document.getElementById("submit");
var userPassword = document.getElementById("yourPw");

submit.addEventListener("click",function(e){
    var character = charList;
    (numCheck.checked)? character += numList : "";
    (symCheck.checked)? character += symList : "";
    userPassword.value = password(charNum.value, character);
    }
);

function password(length, character){
		var pwd = "";
    for(var i = 0; i < length; i++){
    		pwd += character.charAt(Math.floor(Math.random() * character.length));
    }
    return pwd;
}