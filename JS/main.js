// بسم الله الرحمن الرحيم 
// Start Projec



let allInpute = document.querySelectorAll(".card .body-sign-up form .inp input")
let inputUser = document.querySelector(".card .body-sign-up form .input-user input")
let inputPhone = document.querySelector(".card .body-sign-up form .input-phone-num input")
let inputEmail = document.querySelector(".card .body-sign-up form .input-email input")
let inputPassword = document.querySelector(".card .body-sign-up form .input-password input")
let inputRePassword = document.querySelector(".card .body-sign-up form .input-re-password input")
let inputCode = document.querySelector(".card .body-sign-up form .input-code input")
let code = "CAax3$aw"



allInpute.forEach(function(ele) {
    ele.oninput = function() {
        if (ele === inputUser) {
            if (inputUser.value.match(/\s/ig) || inputUser.value.match(/-/ig) || inputUser.value === "") {
                inputUser.parentElement.classList.remove("bad")
                inputUser.parentElement.classList.remove("good")
                inputUser.parentElement.classList.add("bad")
            } else {
                inputUser.parentElement.classList.remove("bad")
                inputUser.parentElement.classList.remove("good")
                inputUser.parentElement.classList.add("good")
            }
        }else if (ele === inputPhone) {
            if (inputPhone.value.match(/01(0|1|2|5)\d{8}/g) ) {
                inputPhone.parentElement.classList.remove("bad")
                inputPhone.parentElement.classList.remove("good")
                inputPhone.parentElement.classList.add("good")
            } else {
                inputPhone.parentElement.classList.remove("bad")
                inputPhone.parentElement.classList.remove("good")
                inputPhone.parentElement.classList.add("bad")
            }
        }else if (ele === inputEmail) {
            if (inputEmail.value.match(/\w+@gmail.com/ig) && !inputEmail.value.match(/\s/g) && !inputEmail.value.match(/^\d+/ig)) {
                inputEmail.parentElement.classList.remove("bad")
                inputEmail.parentElement.classList.remove("good")
                inputEmail.parentElement.classList.add("good")
            }else {
                inputEmail.parentElement.classList.remove("bad")
                inputEmail.parentElement.classList.remove("good")
                inputEmail.parentElement.classList.add("bad")
            }
        }else if (ele === inputPassword) {
            if (inputPassword.value.length < 7) {
                inputPassword.parentElement.classList.remove("bad")
                inputPassword.parentElement.classList.remove("good")
                inputPassword.parentElement.classList.add("bad")
            } else {
                inputPassword.parentElement.classList.remove("bad")
                inputPassword.parentElement.classList.remove("good")
                inputPassword.parentElement.classList.add("good")
            }
        }else if (ele === inputRePassword) {
            if (inputPassword.value === inputRePassword.value) {
                inputRePassword.parentElement.classList.remove("bad")
                inputRePassword.parentElement.classList.remove("good")
                inputRePassword.parentElement.classList.add("good")
            } else {
                inputRePassword.parentElement.classList.remove("bad")
                inputRePassword.parentElement.classList.remove("good")
                inputRePassword.parentElement.classList.add("bad")
            }
        }else if (ele === inputCode) {
            if (inputCode.value === code) {
                inputCode.parentElement.classList.remove("bad")
                inputCode.parentElement.classList.remove("good")
                inputCode.parentElement.classList.add("good")
            }else {
                inputCode.parentElement.classList.remove("bad")
                inputCode.parentElement.classList.remove("good")
                inputCode.parentElement.classList.add("bad")
            }
        }
    }
})



document.querySelector(".card .body-sign-up form").onsubmit = function(event) {
    let userValid = false
    if (inputUser.parentElement.classList.contains("good") && inputPhone.parentElement.classList.contains("good") && inputEmail.parentElement.classList.contains("good") && inputPassword.parentElement.classList.contains("good") && inputRePassword.parentElement.classList.contains("good") && inputCode.parentElement.classList.contains("good")) {
        userValid = true
    } 
    if (userValid === false) {
        event.preventDefault()
    }
}