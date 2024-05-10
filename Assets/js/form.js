// grabbing variable to use
const mainEl = document.getElementById('parents');
const formEl = document.getElementById('get-started');
const inputName = document.getElementById('Uname');
const inputTitle = document.getElementById('title');
const contentEl = document.getElementById('content');
const buttonEl = document.getElementById('submit');
const errorMessageEl = document.getElementById('errorMessage');



function formSubmition (event){
    // prevent default brwoiser
event.preventDefault();


if (inputName.value.trim() === '' || inputTitle.value.trim() === '' || contentEl.value.trim() === '') {
    errorMessageEl.setAttribute('style', 'color: red; font-size: 20px; display: block;');
    return;
}
errorMessageEl.style.display = 'none';


// storing data to localStorage
localStorage.setItem("UserName", inputName.value);
localStorage.setItem("title", inputTitle.value);
localStorage.setItem("content", contentEl.value);

   // Directing the user to the blog page

window.location.href = './blog.html';
}

formEl.addEventListener('submit', formSubmition);




