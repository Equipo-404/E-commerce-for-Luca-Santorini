
export function validate() {
    // Define regular expressions for validation
var nameRegex = /^[a-zA-Z ]{2,30}$/;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,20}$/;

// Define error messages
var nameError = 'Please enter a valid name.';
var emailError = 'Please enter a valid email address.';
var passwordError = 'Password must be 8-20 characters long and include at least one lowercase letter, one uppercase letter, and one number.';


var regnameValue = document.getElementById('regname').value;
var regemailValue = document.getElementById('regemail').value;
var regpassValue = document.getElementById('regpass').value;

// Validate the full name field
if (!nameRegex.test(regnameValue)) {
  alert(nameError);
  return false;
}

// Validate the email field
if (!emailRegex.test(regemailValue)) {
  alert(emailError);
  return false;
}

// Validate the password field
if (!passwordRegex.test(regpassValue)) {
  alert(passwordError);
  return false;
}

// If all fields are valid, return true to indicate success
// Get the values of the input elements
var regnameValue = document.getElementById('regname').value;
var regemailValue = document.getElementById('regemail').value;
var regpassValue = document.getElementById('regpass').value;

// Create a user object
var user = {
  name: regnameValue,
  email: regemailValue,
  password: regpassValue
};
console.log(user)
// Convert the user object to a JSON string
var userJson = JSON.stringify(user);

// Store the user object in local storage
localStorage.setItem(user.email, userJson);


}

export function validateLogin () {
    // Get the value of the "user" key in localStorage

var userEmail = document.getElementById("logemail").value;
var userPassword = document.getElementById("logpass").value;
var userString = localStorage.getItem(userEmail);

// Check if the user exists
if (userString === null) {
  // User doesn't exist - show an alert
  alert('User not found in localStorage');
} else {
  // User exists - do something with the user data
  var user = JSON.parse(userString);
  if (user.password === userPassword) {
    // Passwords match - do something
    alert('Passwords match');
  } else {
    // Passwords don't match - do something else
    alert('Passwords do not match');
  }
}

}