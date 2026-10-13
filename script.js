// Function that triggers an alert pop-up window
function showAlert() {
    alert("🎃 Happy Fall! Thanks for visiting my website!");
}

// Array of different font styles to cycle through
var fonts = [
    "'Courier New', Courier, monospace",
    "'Georgia', serif",
    "'Brush Script MT', cursive",
    "'Trebuchet MS', sans-serif",
    "'Impact', Charcoal, sans-serif",
    "'Times New Roman', Times, serif"
];

// Array of matching autumn titles
var titles = [
    "🍂 Welcome to Cozy Autumn Haven! 🍁",
    "☕ Cozy Fall Vibes & Pumpkin Spice 🎃",
    "🌾 Vintage Autumn Library 🌾",
    "🍎 Harvest Season Delight! 🍁",
    "🔥 Fireside Coding Corner 🔥",
    "Web Development 101"
];

// Tracks which font is currently active
var currentFontIndex = 0;

function changeFontAndText() {
    // Move to the next index in the array, looping back to 0 at the end
    currentFontIndex = (currentFontIndex + 1) % fonts.length;

    // Apply the new font to the whole page

    // Function to read text input and append it to the page
function addCozyNote() {
    var inputField = document.getElementById("user-note-input");
    var displayBoard = document.getElementById("notes-display-board");

    // Make sure elements exist before running
    if (!inputField || !displayBoard) return;

    // Get input text and strip extra whitespace
    var noteText = inputField.value.trim();

    // Prevent posting empty notes
    if (noteText === "") {
        alert("Please write a short note before posting! 🍂");
        return;
    }

    // Create a new note element
    var newNote = document.createElement("div");
    newNote.classList.add("note-card");
    newNote.innerHTML = "🍁 " + noteText;

    // Add new note to top of the board
    displayBoard.prepend(newNote);

    // Clear input field for next message
    inputField.value = "";
}
    document.body.style.fontFamily = fonts[currentFontIndex];

    // Update the main heading text
    var mainTitle = document.querySelector("h1");
    if (mainTitle) {
        mainTitle.textContent = titles[currentFontIndex];
    }
}
