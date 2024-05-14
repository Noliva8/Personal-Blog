document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const mainContainer = document.getElementById("main-container");
  const theme = document.getElementById("theme-switcher");
  const mainEl = document.createElement("main");

  const formEl = document.getElementById("get-started");
  const footerEl = document.createElement("footer");

  const footerP = document.createElement("p");
  footerP.className = "footer-paragraph";
  const footerA = document.createElement("a");
  footerA.className = 'portofolio'

const footerB = document.createElement("p");
const footerPvalue = document.createElement("p");
const footerBr = document.createElement('br');
const footerEmail = document.createElement('p');
 const footerEmailAdrees = document.createElement("a");
 const footerBrEmail = document.createElement('br');
 const loveEl = document.createElement('p');
 const footerDiv = document.createElement('div');
 footerDiv.className = 'last-div';
 const footerDivLove = document.createElement('div');
 



  // footerP.textContent ='Portfolio:'

  // Theme of the blog

  let mode = "dark";

  theme.addEventListener("click", function () {
    if (mode === "dark") {
      mode = "light";
      body.classList.remove("light");
      body.classList.add("dark");
      blogDivEl.style.border = "1px solid white";
      mainContainer.style.border = '5px solid white';
      mainEl.style.border = '2px solid white';

    } else {
      mode = "dark";
      body.classList.remove("dark");
      body.classList.add("light");
      blogDivEl.style.border = "1px solid black";
    }
  });

  document.body.appendChild(mainContainer);
  mainContainer.appendChild(mainEl);



  // Retrieve stored data
  const dataStored = JSON.parse(localStorage.getItem("blogPost"));

  for (let i = 0; i < dataStored.length; i++) {
    const blogDivEl = document.createElement("div");
    blogDivEl.className = "blog-container";
    const blogEl = document.createElement("div");
    blogEl.className = "blog";
    const blogTitle = document.createElement("h2");
    const underLineEl = document.createElement("div");
    underLineEl.className = "underline";
    const contentP = document.createElement("p");
    contentP.className = "content";
    const authorEl = document.createElement("h3");
    authorEl.className = "author";
    mainEl.appendChild(blogDivEl);
    blogDivEl.appendChild(blogEl);
    blogEl.appendChild(blogTitle);
    blogDivEl.appendChild(underLineEl);
    blogDivEl.appendChild(contentP);
    blogDivEl.appendChild(authorEl);
    blogTitle.textContent = dataStored[i].title;
  contentP.textContent = dataStored[i].content;
  authorEl.textContent = dataStored[i].userName;
  }



 
  
  


footerP.textContent = 'Portfolio: ';
footerA.href = 'https://github.com/Noliva8';
footerA.textContent = 'Noliva8';
footerB.textContent = 'Blog: ';
footerPvalue.textContent = 'Full stuck blog';
footerEmail.textContent = 'Email : ';
footerEmailAdrees.href = 'mailto:nolivanoly@gmail.com';
footerEmailAdrees.textContent = 'nolivanoly@gmail.com';
loveEl.textContent ='Made with ❤️ by Olivier Ndicunguye';




footerP.style.display = 'inline';
footerA.style.display = 'inline';
footerA.style.fontWeight = 'bold';

footerB.style.display = 'inline';
footerPvalue.style.display = 'inline';
footerPvalue.style.fontWeight = 'bold';
loveEl.style.textAlign = 'center';

footerEmail.style.display = 'inline';
footerEmailAdrees.style.display = 'inline';

footerDiv.setAttribute('style', 'margin-left: 40px;'

)

footerDivLove.appendChild(loveEl);

footerDiv.appendChild(footerP);
footerDiv.appendChild(footerA); 
footerDiv.appendChild(footerBr);

footerDiv.appendChild(footerB);
footerDiv.appendChild(footerPvalue);
 footerDiv.appendChild(footerBrEmail);

footerDiv.appendChild(footerEmail);
 footerDiv.appendChild(footerEmailAdrees);


footerEl.appendChild(footerDivLove);
footerEl.appendChild(footerDiv);
 

document.body.appendChild(footerEl);



});



