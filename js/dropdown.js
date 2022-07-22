function toggleDropdown() {
    var button_img = document.getElementById("dropdown-icon");
    var dropdown = document.getElementById("mobile-nav-dropdown");
    if (dropdown.style.display === "flex") {
        dropdown.style.display = "none";
        button_img.setAttribute("src", "/img/drop-down-icon.png")
    } else {
        dropdown.style.display = "flex";
        button_img.setAttribute("src", "/img/drop-down-icon-x.png")
    }
}