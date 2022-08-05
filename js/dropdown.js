function toggleDropdown() {
    var button_img = document.getElementById("dropdown-icon");
    var dropdown = document.getElementById("nav-buttons");
    if (dropdown.style.display === "inherit") {
        dropdown.style.display = "none";
        button_img.setAttribute("src", "/img/drop-down-icon.png")
    } else {
        dropdown.style.display = "inherit";
        button_img.setAttribute("src", "/img/drop-down-icon-x.png")
    }
}