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

var currentFontIndex = 0;

function changeFontAndText() {
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
    document.body.style.fontFamily = fonts[currentFontIndex];

    var mainTitle = document.querySelector("h1");
    if (mainTitle) {
        mainTitle.textContent = titles[currentFontIndex];
    }
}

// Function to read text input and append it to the page
function addCozyNote() {
    console.log("Post Note button clicked!");

    var inputField = document.getElementById("user-note-input");
    var displayBoard = document.getElementById("notes-display-board");

    if (!inputField || !displayBoard) {
        alert("Error: Couldn't find the text box or display board IDs in your HTML!");
        return;
    }

    var noteText = inputField.value.trim();

    if (noteText === "") {
        alert("Please write a short note before posting! 🍂");
        return;
    }

    var newNote = document.createElement("div");
    newNote.classList.add("note-card");
    newNote.innerHTML = "🍁 " + noteText;

    displayBoard.prepend(newNote);
    inputField.value = "";
}
