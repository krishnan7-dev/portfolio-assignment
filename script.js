function toggleNav() {
    // TODO bring navbar down
    const navButton = document.querySelector('button');
    const navMenu = document.getElementById('nav');
    
    const navIcon = "bg-[url('/img/nav_icon.svg')]";
    const crossIcon = "bg-[url('/img/cross_icon.svg')]";
    
    if (navButton.classList.contains(navIcon)) {
        navButton.classList.replace(navIcon, crossIcon);
    } else {
        navButton.classList.replace(crossIcon, navIcon);
    }

    if (navMenu.classList.contains("flex")) {
        navMenu.classList.replace("flex", "hidden");
    } else {
        navMenu.classList.replace("hidden", "flex");
    }
}