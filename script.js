// Function that triggers an alert pop-up window
function showAlert() {
    alert("🎃 Happy Fall! Thanks for visiting my website!");
}

// Function to change the main title text and update the font for the whole page
function changeFontAndText() {
    // 1. Change the font family for all text on the page
    document.body.style.fontFamily = "'Courier New', Courier, monospace";

    // 2. Target the main title (h1) and change its text
    var mainTitle = document.querySelector("h1");
    if (mainTitle) {
        mainTitle.textContent = "🍂 Welcome to Cozy Autumn Haven! 🍁";
    }
}
