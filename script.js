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
    var inputField = document.getElementById("user-note-input");
    var displayBoard = document.getElementById("notes-display-board");

    if (!inputField || !displayBoard) {
        alert("Error: Couldn't find 'user-note-input' or 'notes-display-board' in your HTML!");
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

// Function using if/else logic to show custom messages based on user input
function checkFallVibe() {
    var vibeInput = document.getElementById("vibe-input");
    var resultDisplay = document.getElementById("vibe-result");

    if (!vibeInput || !resultDisplay) {
        alert("Error: Couldn't find 'vibe-input' or 'vibe-result' in your HTML!");
        return;
    }

    var flavorInput = vibeInput.value.toLowerCase().trim();

    // Condition 1: Check if the user left the input blank
    if (flavorInput === "") {
        resultDisplay.innerHTML = "⚠️ <strong>Please type a flavor or drink first!</strong>";
    } 
    // Condition 2: Pumpkin or Latte
    else if (flavorInput.includes("pumpkin") || flavorInput.includes("latte")) {
        resultDisplay.innerHTML = "🎃 <strong>Classic Fall Vibe!</strong> You love sweater weather, autumn leaves, and golden sunsets!";
    } 
    // Condition 3: Apple or Cider
    else if (flavorInput.includes("apple") || flavorInput.includes("cider")) {
        resultDisplay.innerHTML = "🍎 <strong>Crisp & Festive Vibe!</strong> You are definitely heading to an apple orchard and riding on hayrides!";
    } 
    // Condition 4: Chai or Cinnamon
    else if (flavorInput.includes("chai") || flavorInput.includes("cinnamon")) {
        resultDisplay.innerHTML = "☕ <strong>Spicy & Cozy Vibe!</strong> Perfect for curling up with a good book while rain taps on the window!";
    } 
    // Condition 5: Cocoa or Chocolate
    else if (flavorInput.includes("cocoa") || flavorInput.includes("chocolate")) {
        resultDisplay.innerHTML = "🍫 <strong>Sweet & Warm Vibe!</strong> Nothing beats staying extra cozy on a chilly autumn evening!";
    } 
    // Fallback Condition: For any other drink/flavor typed
    else {
        resultDisplay.innerHTML = "🍂 <strong>" + flavorInput + "</strong> sounds delicious! You have a totally unique fall aesthetic!";
    }
}
