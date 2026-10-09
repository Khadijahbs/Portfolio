
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

function updateThemeButton() {
    const isDark = document.body.classList.contains("dark");

    themeIcon.className = isDark
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon";

    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light theme" : "Switch to dark theme"
    );
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    updateThemeButton();
});

updateThemeButton();