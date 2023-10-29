


document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("nav-toggle");
    const navDrawer = document.getElementById("nav-drawer");

    navToggle.addEventListener("click", function () {
        if (navDrawer.style.display === "block") {
            navDrawer.style.display = "none";
        } else {
            navDrawer.style.display = "block";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    navToggle.addEventListener("click", function () {
        if (navMenu.classList.contains("show-menu")) {
            navMenu.classList.remove("show-menu");
        } else {
            navMenu.classList.add("show-menu");
        }
    });
});


// 

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Function to handle click event
function handleNavClick(event) {
    // Remove active class from all links
    navLinks.forEach(navLink => {
        navLink.classList.remove('active');
    });

    // Add active class to the clicked link
    event.target.classList.add('active');
}

// Attach click event listener to each navigation link
navLinks.forEach(navLink => {
    navLink.addEventListener('click', handleNavClick);
});







