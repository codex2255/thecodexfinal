const correctPassword = "wakeUP";

function checkPassword() {
    const userPassword = prompt("Enter the password to access this site:");
    if (userPassword === correctPassword) {
        document.getElementById("content-container").style.display = "block";
        document.getElementById("password-container").style.display = "none";
    } else {
        alert("Incorrect password!");
        window.location.reload();
    }
}

window.onload = function() {
    checkPassword();
};
