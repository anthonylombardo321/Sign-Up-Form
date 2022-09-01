//Input Variables
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

//Error Variables
const firstNameError = document.getElementById("firstName-error");
const lastNameError = document.getElementById("lastName-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");

firstNameInput.addEventListener("input", function(event) {
    if(firstNameInput.value === "") {
        firstNameError.textContent = "Please Enter Your First Name.";
    } else {
        firstNameError.textContent = "";
    }
});

lastNameInput.addEventListener("input", function(event) {
    if(lastNameInput.value === "") {
        lastNameError.textContent = "Please Enter Your Last Name.";
    } else {
        lastNameError.textContent = "";
    }
});

emailInput.addEventListener("input", function(event) {
    if(emailInput.validity.typeMismatch) {
        emailError.textContent = "Please Enter A Valid Email.\nExample: user@email.com";
    } else {
        emailError.textContent = "";
    }
});

phoneInput.addEventListener("input", function(event) {
    if(phoneInput.validity.patternMismatch) {
        phoneError.textContent = "Please Enter a 10-11 Digit Phone Number.";
    } else {
        phoneError.textContent = "";
    }
});

passwordInput.addEventListener("input", function(event) {
    if(passwordInput.validity.patternMismatch){
        passwordError.textContent="";
        let password = passwordInput.value;
        let capitalRegEx = /[A-Z]/g;
        let digitRegEx = /[0-9]/g;

        //Check for Capital Letter
        if(!capitalRegEx.test(password)){
            let errorItem = document.createElement("li");
            let errorDescription = document.createTextNode("Password Must Contain 1 Capital Letter.");
            errorItem.appendChild(errorDescription);
            passwordError.appendChild(errorItem);
        }
        //Check for numbers
        if(!digitRegEx.test(password)){
            let errorItem = document.createElement("li");
            let errorDescription = document.createTextNode("Password Must Contain 1 Number.");
            errorItem.appendChild(errorDescription);
            passwordError.appendChild(errorItem);
        }
        if(password.length < 8){
            let errorItem = document.createElement("li");
            let errorDescription = document.createTextNode("Password Must Be At Least 8 Characters.");
            errorItem.appendChild(errorDescription);
            passwordError.appendChild(errorItem);
        }
    } else {
        passwordError.textContent="";
    }
});

confirmPasswordInput.addEventListener("input", function(event) {
    if(passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
    } else {
        confirmPasswordError.textContent = "";
    }
});