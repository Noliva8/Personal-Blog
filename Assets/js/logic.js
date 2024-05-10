const body = document.body;
const theme =document.getElementById('theme-switcher');

// generate dynamically elements on my html

const mainEl = document.createElement('main');
const blogDivEl = document.createElement('div');
blogDivEl.className ='blog-container';
const blogEl = document.createElement('div');
blogEl.className = 'blog';
const blogTitle = document.createElement('h2');
const underLineEl = document.createElement('div');
underLineEl.className = 'underline';
const contentP = document.createElement('p');
contentP.className = 'content';
const authorEl = document.createElement('h3');
authorEl.className = 'author';



let mode = "dark";

theme.addEventListener('click', function() {
    if (mode === "dark") {
        mode = "light";
        body.classList.remove('light');
        body.classList.add('dark');
        blogDivEl.setAttribute('style', 'border: 1px solid white;')
    } else {
        mode = "dark";
        body.classList.remove('dark');
        body.classList.add('light');
        blogDivEl.setAttribute('style', 'border: 1px solid black;')
    }
});






// append the created elements
document.body.appendChild(mainEl);
mainEl.appendChild(blogDivEl);
blogDivEl.appendChild(blogEl);
blogEl.appendChild(blogTitle);
blogDivEl.appendChild(underLineEl);
blogDivEl.appendChild(contentP);
blogDivEl.appendChild(authorEl);


// add content from local storage

blogTitle.textContent ='hello World';
contentP.textContent = 'Here is my content';
 authorEl.textContent ='Posted by Anonymous';

