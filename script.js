/* =====================================================
   SINCHANA PORTFOLIO - JAVASCRIPT
   ===================================================== */


/* ================= LOADING SCREEN ================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(function () {
            loader.classList.add("hide");
        }, 10000); // 10 seconds
    }

});


/* ================= MOBILE MENU ================= */

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

}


/* ================= CLOSE MOBILE MENU ================= */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .timeline-item, .stat-card"
);

const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* ================= MOUSE GLOW EFFECT ================= */

document.addEventListener("mousemove", function (event) {

    document.documentElement.style.setProperty(
        "--mouse-x",
        event.clientX + "px"
    );

    document.documentElement.style.setProperty(
        "--mouse-y",
        event.clientY + "px"
    );

});


/* ================= TYPING EFFECT ================= */

const typingText = document.querySelector(".hero h2");


const typingWords = [

    "Computer Science Engineering Student",

    "AI & ML Explorer",

    "Web Development Learner",

    "Technology Enthusiast"

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typingAnimation() {

    if (!typingText) {
        return;
    }


    const currentWord = typingWords[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;


        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingAnimation, 1800);

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= typingWords.length) {

                wordIndex = 0;

            }

        }

    }


    const typingSpeed = deleting ? 50 : 80;

    setTimeout(typingAnimation, typingSpeed);

}


typingAnimation();


/* ================= PROJECT HOVER EFFECT ================= */

const projectCards = document.querySelectorAll(".project-card");


projectCards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.transform =
            "translateY(-10px) scale(1.02)";

    });


    card.addEventListener("mouseleave", function () {

        card.style.transform =
            "";

    });

});


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "%c SINCHANA PRABHU ",
    "font-size: 20px; font-weight: bold;"
);

console.log(
    "Welcome to Sinchana's futuristic portfolio 🚀"
);

console.log(
    "CSE • AI/ML • Web Development"
);