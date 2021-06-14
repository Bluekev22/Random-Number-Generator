// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
        var answer1 = prompt("Pick a password length between 8 and 128");
    if (answer1 <8 || answer1 >128 || answer1 == null){
        confirm("Error: password length must be between 8-128 characters");
    }
    else {
        function generatePassword() {
            answer1;
        }
    }

    
   
  var password = generatePassword();
  //grabs the password text field as the variable passwordText
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
