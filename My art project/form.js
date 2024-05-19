
function validateSignUp() {
    var email = document.getElementById("email").value;
    var signUpPassword = document.getElementById("password").value;
    var age = document.getElementById("Age").value;


    // Email validation using regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //A regular expression to validate the email format. This regex checks that the email contains characters before and after the '@' symbol and has a valid domain
    if (!emailRegex.test(email)) { 
        alert("Invalid email format.")
        return false;
        //The if statement uses the test method to check if the email matches the regex pattern. If it doesn't, an alert is shown with the message "Invalid email format," and the function returns false, stopping further execution
    }

    // Password validation: must contain at least one special character and one numeric character
    var passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/;
    if (!passwordRegex.test(signUpPassword)) {
        alert("Password must contain at least one special character and one numeric character.")
        return false;
        //The if statement uses the test method to check if the password matches the regex pattern. If it doesn't, an alert is shown with the message "Password must contain at least one special character and one numeric character," and the function returns false
    } 

    // Age validation: must be a valid number and within a specified range
    var ageValue = parseInt(age);
    if (isNaN(ageValue) || ageValue < 15 || ageValue > 60) {
        signUpError.textContent = "Age must be a valid number between 18 and 100.";
        return false;
    }

    // If all validations pass, return true
    return true;
}