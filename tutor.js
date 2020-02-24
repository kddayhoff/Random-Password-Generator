
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


function generatePassword() {
    var pwLength = "How many characters do you want in your password?";

    //pwLengthInput will be assigned (=) whatever the user puts in
    var pwLengthInput;
    while (true) {
        pwLengthInput = parseInt(prompt(pwLength));
        if (pwLengthInput >=8 && pwLengthInput <=128) {
            break;
        }
        {
            alert ("Password length must be a number and 8 to 128 characters");
            pwLengthInput = prompt(pwLength);
        }
    }

    var wantLower = confirm("Do you want lowercase letters?");
    var wantUpper = confirm("Do you want uppercase letters?");
    var wantNumber = confirm("Do you want numbers?");
    var wantChars = confirm("Do you want special characters?");

    var pwLower = "abcdefghijklmnopqrstuvwxyz";
    var pwUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var pwNumber = "0123456789";
    var pwChars = "!@#$%^&*";

    var characterSpace = [];
    
    if (wantLower) {
        for (var i = 0; i < pwLower.length; i++) {
            characterSpace.push(pwLower.charAt(i));
        }
    }

    if (wantUpper) {
        for (var i = 0; i < pwUpper.length; i++) {
            characterSpace.push(pwUpper.charAt(i));
        }
    }

    if (wantNumber) {
        for (var i = 0; i < pwNumber.length; i++) {
            characterSpace.push(pwNumber.charAt(i));
        }
    }

    if (wantChars) {
        for (var i = 0; i < pwChars.length; i++) {
            characterSpace.push(pwChars.charAt(i));
        }
    }
     console.log(characterSpace);

    var password = "";

    while (password.length < pwLengthInput)  {
        password += characterSpace[Math.floor(Math.random() * characterSpace.length)];
    } 
    console.log(password);
    return password;         
}
