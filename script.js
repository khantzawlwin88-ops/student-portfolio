// Welcome Message
window.onload = function () {
    console.log("Welcome to UNIMY Student Portfolio Website");
};

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Button Animation
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});