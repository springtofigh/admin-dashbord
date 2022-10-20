const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtm = document.querySelector("#close-btn");
const toggleTheme = document.querySelector(".theme-toggler");
const check = document.getElementById("check");
const switcher = document.querySelector(".switcher");

// OPEN MENU
menuBtn.addEventListener('click' , () => {
    sideMenu.style.display = 'block';
})

// CLOSE MENU
closeBtm.addEventListener('click' , () => {
    sideMenu.style.display = 'none';
})

// DARK MOOD
if (localStorage.getItem('darkMode') === null) {
    localStorage.setItem('darkMode', "false");
}

checkStatus()

function checkStatus() {
    if (localStorage.getItem('darkMode') === "true") {
        check.checked = true;
        const color = document.body
        color.classList.add("dark-theme");

    } else {
        check.checked = false;
        document.body.classList.remove('dark-theme');
    }
}

function changeStatus() {
    if (localStorage.getItem('darkMode') === "true") {
        localStorage.setItem('darkMode', "false");
        document.body.classList.remove('dark-theme');
    } else {
        localStorage.setItem('darkMode' , "true");
        const color = document.body
        color.classList.add("dark-theme");
    }
}