const notifyUpper = document.getElementById("notifyUpper");
const notifyContainer = document.getElementById("notifyContainer");
const notifyMeButton = document.getElementById("notifyMeButton");
const closeButton = document.getElementById("close");
const notfiyMain = document.getElementById("notifyMain");

const inputName = document.getElementById("notify-input-name");
const inputEmail = document.getElementById("notify-input-email");

const errorName = document.getElementById("error-name");
const errorEmail = document.getElementById("error-email");

const notifyTitle = document.getElementById("notify-title");
const notifyText = document.getElementById("notify-text");
const loader = document.querySelector(".loader");

let isloading = false;

function validateEmail() {
  let email = inputEmail.value;
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email == "") {
    errorEmail.innerText = "Email darf nicht leer sein!";
    errorEmail.classList.add("active");
    errorEmail.classList.remove("inactive");
    return;
  }

  if (email.match(validRegex)) {
    errorEmail.classList.remove("active");
    errorEmail.classList.add("inactive");

    loading();
  } else {
    errorEmail.innerText = "Ist keine Email!";
    errorEmail.classList.add("active");
    errorEmail.classList.remove("inactive");
  }
}

function reset() {
  loader.classList.add("inactive")
  loader.classList.remove("active");

}

function fail() {
  loader.classList.add("fail");
}
function success() {
  loader.classList.add("success");
}

function reset() {
  loader.classList.remove("fail");
  notfiyMain.classList.remove("inactive");
  inputName.classList.remove("inactive");
  inputEmail.classList.remove("inactive");
  notifyText.classList.remove("inactive");
  notifyTitle.classList.remove("inactive");
}

function failed() {
  fail();
  isloading = false;
}

function suceeded() {
  success();
  isloading = false;
}

async function loading() {
  isloading = true;
  notfiyMain.classList.add("inactive");
  inputName.classList.add("inactive");
  inputEmail.classList.add("inactive");
  notifyText.classList.add("inactive");
  notifyTitle.classList.add("inactive");

  loader.classList.add("active");
  loader.classList.remove("inactive");

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    name: inputName.value,
    email: inputEmail.value,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://mysterious-temple-75224.herokuapp.com/notify", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      suceeded();
    })
    .catch((error) => {
      failed();
    });
}

function validateName() {
  let name = inputName.value;

  if (name == "") {
    errorName.classList.add("active");
    errorName.classList.remove("inactive");
  } else {
    errorName.classList.remove("active");
    errorName.classList.add("inactive");
  }
}

function validate() {
  validateName();
  validateEmail();
}

notifyMeButton.onclick = () => {
  notifyContainer.classList.remove("inactive");
  notifyContainer.classList.add("active");
};

closeButton.onclick = () => {
  if (isloading) {
    return;
  }

  notifyContainer.classList.add("inactive");
  notifyContainer.classList.remove("active");
  errorEmail.classList.add("inactive");
  errorEmail.classList.remove("active");
  errorName.classList.add("inactive");
  errorName.classList.remove("active");
};

notifyUpper.onclick = () => {
  if (isloading) {
    return;
  }

  notifyContainer.classList.add("inactive");
  notifyContainer.classList.remove("active");
  errorEmail.classList.add("inactive");
  errorEmail.classList.remove("active");
  errorName.classList.add("inactive");
  errorName.classList.remove("active");
};

notfiyMain.onclick = validate;
