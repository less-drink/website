const notifyUpper = document.getElementById('notifyUpper');
const notifyContainer = document.getElementById('notifyContainer');
const notifyMeButton = document.getElementById('notifyMeButton');
const closeButton = document.getElementById('close');
const notfiyMain = document.getElementById('notifyMain');

const inputName = document.getElementById('notify-input-name');
const inputEmail = document.getElementById('notify-input-email');

function validateEmail(){
    let email = inputEmail.value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(email == ""){
        //email is empty
        return;
    }

    if (email.match(validRegex)) {
        //email is valid
    }else {
        //email is invalid
    }
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

notfiyMain.onclick = validateEmail;
