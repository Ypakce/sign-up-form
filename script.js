const form = document.querySelector("#my-form");
const password = document.querySelector("#password");
const password_repeat = document.querySelector("#password_repeat");
const error_text = document.querySelector("#error");

form.addEventListener('submit', (e) => {
    if(password.value != password_repeat.value){
        error_text.innerText = "*Passwords does not match";
        password.style.border = "1px solid rgb(200, 75, 0)";
        password_repeat.style.border = "1px solid rgb(200, 75, 0)";
        e.preventDefault();
    }
    else{
        error_text.innerText = "";    
    }
});