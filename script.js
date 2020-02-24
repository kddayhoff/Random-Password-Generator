var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

//click button event to start prompts
function generatePassword() {

  var pwLength = "How many characters do you want in your password?";

//pwLengthInput will be assigned (=) whatever number the user puts in
  var pwLengthInput;
  while (true) {
      pwLengthInput = parseInt(prompt(pwLength));
      if (pwLengthInput >=8 && pwLengthInput <=128) {
          break;
      }
      {
          alert ("Password length can only be a number between 1 and 128");
          pwLengthInput = prompt(pwLength);
      }
  }

//Variables associated with command prompts that follow list
var wantLower = confirm("Do you want lowercase letters?");
var wantUpper = confirm("Do you want uppercase letters?");
var wantNumber = confirm("Do you want numbers?");
var wantChars = confirm("Do you want special characters?");

var pwLower = "abcdefghijklmnopqrstuvwxyz";
var pwUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pwNumber = "0123456789";
var pwChars = "!@#$%^&*";

//This variable will contain the final array/string that the randomizer will choose letters from
var characterRandom = [];

//These conditionals and loops will determine which strings are put (aka pushed) in the variable characterRandom from which the randomizer will choose the string it can pull characters from at random
if (wantLower) {
  for (var i = 0; i < pwLower.length; i++) {
      characterRandom.push(pwLower.charAt(i));
  }
}

if (wantUpper) {
  for (var i = 0; i < pwUpper.length; i++) {
      characterRandom.push(pwUpper.charAt(i));
  }
}

if (wantNumber) {
  for (var i = 0; i < pwNumber.length; i++) {
      characterRandom.push(pwNumber.charAt(i));
  }
}

if (wantChars) {
  for (var i = 0; i < pwChars.length; i++) {
      characterRandom.push(pwChars.charAt(i));
  }
}
console.log(characterRandom);

//This variable will contain the final generated password
var password = "";

while (password.length < pwLengthInput)  {
  password += characterRandom[Math.floor(Math.random() * characterRandom.length)];
} 

//Write password to console and to the page (return it to page)
console.log(password);
return password;         
}
