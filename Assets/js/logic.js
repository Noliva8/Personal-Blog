document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const theme = document.getElementById('theme-switcher');
    const mainEl = document.createElement('main');
    const blogDivEl = document.createElement('div');
    blogDivEl.className = 'blog-container';
    const blogEl = document.createElement('div');
    blogEl.className = 'blog';
    const blogTitle = document.createElement('h2');
    const underLineEl = document.createElement('div');
    underLineEl.className = 'underline';
    const contentP = document.createElement('p');
    contentP.className = 'content';
    const authorEl = document.createElement('h3');
    authorEl.className = 'author';
    const formEl = document.getElementById('get-started');
   
    

// Theme of the blog

    let mode = "dark";

    theme.addEventListener('click', function() {
        if (mode === "dark") {
            mode = "light";
            body.classList.remove('light');
            body.classList.add('dark');
            blogDivEl.style.border = '1px solid white';
        } else {
            mode = "dark";
            body.classList.remove('dark');
            body.classList.add('light');
            blogDivEl.style.border = '1px solid black';
        }
    });

    document.body.appendChild(mainEl);
    mainEl.appendChild(blogDivEl);
    blogDivEl.appendChild(blogEl);
    blogEl.appendChild(blogTitle);
    blogDivEl.appendChild(underLineEl);
    blogDivEl.appendChild(contentP);
    blogDivEl.appendChild(authorEl);



    // Retrieve stored data
    const userNameStored = localStorage.getItem('UserName');
    const titleStored = localStorage.getItem('Title');
    const contentStored = localStorage.getItem('Content');


    // // Display stored data
    blogTitle.textContent = titleStored;
    contentP.textContent = contentStored;
    authorEl.textContent = userNameStored;

    
    });

   
   
    

