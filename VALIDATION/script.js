
function validatePassword() {
 
  let password = prompt("Enter your password:");
  let confirmPassword = prompt("Confirm your password:");

 
  if (password === confirmPassword) {
    console.log("Password Matched. Password validation Successful.");
  } else {
    console.log("Password didn't match. Password validation unsuccessful.");
  }
}


validatePassword();
