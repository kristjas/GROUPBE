function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("show");
}

//close dropdown if clicked elsewhere
window.onclick = function(event) {
    const dropdown = document.getElementById("dropdown");
    if (!event.target.matches('.profile-pic') && dropdown.classList.contains('show')) {
        dropdown.classList.remove("show"); // Remove the show class to hide
    }
};
