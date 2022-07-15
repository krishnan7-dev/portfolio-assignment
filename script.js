const links = document.querySelectorAll('#mobile-nav a');
links.forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('mobile-nav');
        navMenu.classList.replace("flex", "hidden");
    })
})

function toggleNav() {
    // TODO toggle show navbar
    const navButton = document.querySelector('button');
    const navMenu = document.getElementById('mobile-nav');
    
    const navIcon = "url('./img/nav_icon.svg')";
    const crossIcon = "url('./img/cross_icon.svg')";

    navMenu.classList.contains("flex") ? 
        navMenu.classList.replace("flex", "hidden") : navMenu.classList.replace("hidden", "flex");
}