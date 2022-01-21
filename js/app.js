/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll(".landing__container");
const navBar = document.querySelector("ul");
const barEl = document.querySelector(".navbar__menu ul")

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function hideBar() {
    barEl.classList.add("invisable");
};

setTimeout(hideBar, 5000);
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for (let i = 0; i < sections.length; i++) {
    let item = document.createElement("LI");
    item.innerHTML = `<h4> ${sections[i].querySelector("h2").innerText}<\h4>`;
    item.classList.add("notTouched")
    navBar.appendChild(item);
    item.addEventListener('click', function (event) {
        event.preventDefault()
        sections[i].scrollIntoView({ behavior: "smooth", block: "start" });
        clearTimeout();

    });
};



document.addEventListener('mousemove', function (e) {
    if (barEl.classList.contains("invisable")) {
        barEl.classList.remove("invisable");
        setTimeout(hideBar, 3000);
    }


});



const liArr = navBar.querySelectorAll("li");
for (const i in liArr) {
    liArr[i].onmouseover = function () {
        for (var j = 0; j < liArr.length; j++) {
            liArr[j].classList.add("notTouched");
            liArr[j].classList.remove("touched");
        }
        liArr[i].classList.remove("notTouched");
        liArr[i].classList.add("touched");

    };
}

const mainBody = document.querySelector("main");
mainBody.onmouseover = function () {
    for (var j = 0; j < liArr.length; j++) {
        liArr[j].classList.add("notTouched");
        liArr[j].classList.remove("touched");
    }
};
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

document.addEventListener('scroll', function () {
    var disArr = [];
    for (let i = 0; i < sections.length; i++) {
        disArr.push(Math.abs(0 - sections[i].getBoundingClientRect().top));
    }
    var min = 0;
    for (const i in disArr) {
        if (disArr[i] < disArr[min]) {
            min = i
        }
    }
    liElements = barEl.querySelectorAll("li");
    for (let i = 0; i < sections.length; i++) {
        sections[i].parentElement.classList.remove("your-active-class");
        liElements[i].classList.remove("underlined");
    }
    // Set sections as active

    sections[min].parentElement.classList.add("your-active-class");
    liElements[min].classList.add("underlined");
    if (barEl.classList.contains("invisable")) {
        barEl.classList.remove("invisable");
        setTimeout(hideBar, 3000);
    }


});
