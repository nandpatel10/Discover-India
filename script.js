
// Video toggle functionality
function toggleVideo() {
    const video = document.getElementById("myVideo");
    const button = document.getElementById("myBtn");
    if (video.paused) {
        video.play();
        button.textContent = "Pause";
    } else {
        video.pause();
        button.textContent = "Play";
    }
}

// Tab functionality
function openTab(evt, tabName) {
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => tab.style.display = "none");

    const tabLinks = document.querySelectorAll(".tab-link");
    tabLinks.forEach(link => link.classList.remove("active"));

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

//tab links
const tabLinks = document.querySelectorAll(".tab-link");
tabLinks.forEach(link => link.addEventListener("click", function (e) {
    e.preventDefault();
    const tabName = this.getAttribute("href");
    openTab(this, tabName);
    }))
    