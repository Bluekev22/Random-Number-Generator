// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//click event function initiates prompts
function writePassword() {
    var password = generatePassword();
    function generatePassword() {
    //Prompt stores number into variable
      var numberLength = Number(prompt("Pick a password length between 8 and 128"));
      //if else statement provides error if a valid number is not given
    if (numberLength <8 || numberLength >128 || numberLength == null){
        return alert("Error: password length must be between 8-128 characters");
    }
      //Prompts continue if valid number is entered and stores the boolean in a variable
    else {
       var lowerCase = confirm("Would you like lower case letters in your password? Press 'ok' for yes, cancel for 'no'");
    }  
       var upperCase = confirm("Would you like upper case letters?");
    
       var numbers = confirm("Would you like numbers?");
    
       var specialCharacters = confirm("Would you like special characters?");
      
       //4 functions to produce their respected characters 
    function getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    
    function getRandomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    
    function getRandomNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    
    function getRandomSymbol() {
        const symbols = '!@#$%^&*(){}=<>?/~+;'
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    //store functions as values in an object with the prompt variables as keys
    var randomFunctions = {
        lowerCase: getRandomLower,
        upperCase: getRandomUpper,
        numbers: getRandomNumber,
        specialCharacters: getRandomSymbol
    }
    //store the output in a variable with inital empty string
    var createdPassword = "";
    //get a types count
    var typesCount = lowerCase + upperCase + numbers + specialCharacters;
    
    //create array that filters out false booleans    
    var randomArray = [{ lowerCase }, { upperCase }, { numbers
       }, { specialCharacters }].filter(item => Object.values(item)[0]);
     //create alert if no types are selected      
     if(typesCount === 0) {
         return window.alert("You must select at least one character type.")
        };
    
    //Loops through the types that are true until the desired length is reached
    for (var i = 0; i < numberLength; i += typesCount) {
        randomArray.forEach(type => {
            var selectedTypes = Object.keys(type)[0];
            createdPassword += randomFunctions[selectedTypes]();
        });  
    };
       
    return createdPassword;
  }    
  
  //grabs the password text field as the variable passwordText
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
