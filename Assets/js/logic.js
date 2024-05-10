const body = document.body;
const theme =document.getElementById('theme-switcher');

let mode = "dark";

theme.addEventListener('click', function() {
    if (mode === "dark") {
        mode = "light";
        body.classList.remove('light');
        body.classList.add('dark');
    } else {
        mode = "dark";
        body.classList.remove('dark');
        body.classList.add('light');
    }
});
