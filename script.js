function check() {
    password = document.getElementById("password")
    message = document.getElementById("error-message")
    confirm_password = document.getElementById("confirm-password")
    if(password.value != confirm_password.value) {
        confirm_password.classList.add("error")
        message.textContent = "*Passwords do not match."
    }
    else {
        confirm_password.classList.remove("error")
        message.textContent = ""
    }
}
  