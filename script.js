const notifyUpper = document.getElementById('notifyUpper');
const notifyContainer = document.getElementById('notifyContainer');
const notifyMeButton = document.getElementById('notifyMeButton');
const closeButton = document.getElementById('close');

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