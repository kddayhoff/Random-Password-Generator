
//pseudo code:
    //need variables -- variables for length of password, arrays for characters and numbers.
    //click button on page to start titled "new password generator"
    //a series of prompts, criteria: length is 8-128 characters, prompt for lowercase, prompt for uppercase, prompt for numeric, prompt for special characters - 5 prompts total
    //would need 5 loops? -- one big one to run all the criteria chose. Ex: if 8 characters were chosen, it would have to run through all options chosen 8 times, with math.random loop (I think). if else statement for lowercase prompt, if the lowercase is selected, then the randomizer would run it, if not selected (cancel), the randomizer would skip this statement, same with numberic and special characters.
    //random generator from character in a string for each spot 
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var password = "";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var chars = "!@#$%^&*";
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  
var pwLength = "How many characters do you want in your password?";

var pwLengthInput = prompt(pwLength);

while (
  pwLength !== null &&
  (
  isNaN(pwLengthInput) ||
      !((+pwLengthInput >=8 && +pwLengthInput <=128))
  )
)
{
alert ("Password length must be a number and 1 to 128 characters");
pwLengthInput = prompt(pwLength);
}

/*var confirmLower = confirm("Do you want lowercase letters?");
var confirmUpper = confirm("Do you want uppercase letters?");
var confirmNumber = confirm("Do you want numbers?");
var confirmChars = confirm("Do you want special characters?");
//need to figure out how to input the number the user chooses into the less than 6, is it i?*/
//need to 


while (password.length < 10) {
  password += characters[Math.floor(Math.random() * characters.length)];
} 
console.log(password);

