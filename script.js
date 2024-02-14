// Function to toggle between Login and Sign Up forms
function toggleForm() {
    var loginBox = document.getElementById("loginBox");
    var signupBox = document.getElementById("signupBox");
    
    if (loginBox.style.display === "none") {
        loginBox.style.display = "block";
        signupBox.style.display = "none";
    } else {
        loginBox.style.display = "none";
        signupBox.style.display = "block";
    }
}
