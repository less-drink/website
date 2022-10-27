const notifyUpper = document.getElementById('notifyUpper');
const notifyContainer = document.getElementById('notifyContainer');
const notifyMeButton = document.getElementById('notifyMeButton');
const closeButton = document.getElementById('close');
const notfiyMain = document.getElementById('notifyMain');

const inputName = document.getElementById('notify-input-name');
const inputEmail = document.getElementById('notify-input-email');

const errorName = document.getElementById('error-name');
const errorEmail = document.getElementById('error-email');

function validateEmail(){
    let email = inputEmail.value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(email == ""){
        errorEmail.innerText = "Email darf nicht leer sein!"
        errorEmail.classList.add("active");
        errorEmail.classList.remove("inactive");
        return;
    }

    if (email.match(validRegex)) {
        errorEmail.classList.remove("active");
        errorEmail.classList.add("inactive");
    }else {
        errorEmail.innerText = "Ist keine Email!";
        errorEmail.classList.add("active");
        errorEmail.classList.remove("inactive");
    }
}

function validateName(){
    let name = inputName.value;

    if(name == ""){
        errorName.classList.add("active");
        errorName.classList.remove("inactive");
    }else {
        errorName.classList.remove("active");
        errorName.classList.add("inactive");
    }
}

function validate(){
    validateName();
    validateEmail();
}

notifyMeButton.onclick = () => {
    notifyContainer.classList.remove('inactive');
    notifyContainer.classList.add('active');
}

closeButton.onclick = () => {
    notifyContainer.classList.add('inactive');
    notifyContainer.classList.remove('active');
}

notifyUpper.onclick = () => {
    notifyContainer.classList.add('inactive');
    notifyContainer.classList.remove('active');
}

notfiyMain.onclick = validate;
