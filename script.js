/*=========================================
    MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

/*=========================================
    CLOSE MENU AFTER CLICK
=========================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});

/*=========================================
    ACTIVE NAVBAR WHILE SCROLLING
=========================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=========================================
    SCROLL REVEAL ANIMATION
=========================================*/

const revealElements = document.querySelectorAll(
    ".about-card, .education-card, .skill-card, .project-card, .team-card, .contact-card"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*=========================================
    SCROLL TO TOP BUTTON
=========================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#00ff99;
color:#000;
font-size:22px;
font-weight:bold;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 0 20px #00ff99;
transition:.3s;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
    HERO TYPING EFFECT
=========================================*/

const subtitle = document.querySelector(".hero-subtitle");

if (subtitle) {

    const text = subtitle.textContent;

    subtitle.textContent = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            subtitle.textContent += text.charAt(i);

            i++;

            setTimeout(typing, 40);

        }

    }

    typing();

}

/*=========================================
    CONSOLE MESSAGE
=========================================*/

console.log("%cWelcome to Team Portfolio!", "color:#00ff99;font-size:20px;font-weight:bold;");
console.log("Developed by UNIMY Computer Science Students 🚀");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".about-card, .education-card, .skill-card, .project-card, .team-card, .contact-card"
).forEach(el => {
    el.classList.add("fade-up");
    observer.observe(el);
});