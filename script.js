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

    if (!inputField || !displayBoard) return;

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

    if (!vibeInput || !resultDisplay) return;

    var flavorInput = vibeInput.value.toLowerCase().trim();

    if (flavorInput === "") {
        resultDisplay.innerHTML = "⚠️ <strong>Please type a flavor or drink first!</strong>";
    } else if (flavorInput.includes("pumpkin") || flavorInput.includes("latte")) {
        resultDisplay.innerHTML = "🎃 <strong>Classic Fall Vibe!</strong> You love sweater weather, autumn leaves, and golden sunsets!";
    } else if (flavorInput.includes("apple") || flavorInput.includes("cider")) {
        resultDisplay.innerHTML = "🍎 <strong>Crisp & Festive Vibe!</strong> You are definitely heading to an apple orchard and riding on hayrides!";
    } else if (flavorInput.includes("chai") || flavorInput.includes("cinnamon")) {
        resultDisplay.innerHTML = "☕ <strong>Spicy & Cozy Vibe!</strong> Perfect for curling up with a good book while rain taps on the window!";
    } else if (flavorInput.includes("cocoa") || flavorInput.includes("chocolate")) {
        resultDisplay.innerHTML = "🍫 <strong>Sweet & Warm Vibe!</strong> Nothing beats staying extra cozy on a chilly autumn evening!";
    } else {
        resultDisplay.innerHTML = "🍂 <strong>" + flavorInput + "</strong> sounds delicious! You have a totally unique fall aesthetic!";
    }
}

// Function to generate a random autumn activity combo
function generateRandomActivity() {
    var activities = [
        "Go apple picking at a local orchard",
        "Bake fresh cinnamon sugar donuts",
        "Take a scenic drive to look at peak fall foliage",
        "Carve pumpkins and roast the seeds",
        "Binge-watch classic Gilmore Girls episodes",
        "Read a mystery novel under a soft knit blanket",
        "Visit a local corn maze with friends",
        "Have a cozy movie marathon with hot cocoa"
    ];

    var treats = [
        "a warm Pumpkin Spice Latte ☕",
        "a steaming mug of Apple Cider 🍎",
        "a cup of Hot Chocolate with marshmallows 🍫",
        "a fresh slice of Warm Pecan Pie 🥧",
        "a salted caramel apple 🍏",
        "a cup of Spiced Chai Tea 🍵"
    ];

    var weatherVibes = [
        "on a crisp, sunny afternoon ☀️",
        "while rain gently taps on the window 🌧️",
        "on a breezy, overcast chilly morning 🍂",
        "as the golden hour sunset lights up the leaves 🌅",
        "on a foggy, sweater-weather evening 🌫️"
    ];

    var randomActivity = activities[Math.floor(Math.random() * activities.length)];
    var randomTreat = treats[Math.floor(Math.random() * treats.length)];
    var randomVibe = weatherVibes[Math.floor(Math.random() * weatherVibes.length)];

    var resultBox = document.getElementById("activity-result");
    if (resultBox) {
        resultBox.innerHTML = "✨ <strong>Your Autumn Plan:</strong> " + randomActivity + " alongside " + randomTreat + " " + randomVibe + "!";
    }
}

// Function for the Autumn Personality Quiz
function runQuiz() {
    var selectElement = document.getElementById("quiz-select");
    var resultElement = document.getElementById("quiz-result");

    if (!selectElement || !resultElement) {
        alert("Error: Check your index.html! Missing id='quiz-select' or id='quiz-result'");
        return;
    }

    var choice = selectElement.value;

    if (choice === "book") {
        resultElement.innerHTML = "📖 <strong>You are an Oak Leaf!</strong> Wise, quiet, and cozy.";
    } else if (choice === "walk") {
        resultElement.innerHTML = "🍁 <strong>You are a Golden Maple Leaf!</strong> Energetic, adventurous, and bright.";
    } else if (choice === "bake") {
        resultElement.innerHTML = "🥧 <strong>You are a Sweet Birch Leaf!</strong> Warm, welcoming, and loved by everyone.";
    }
}
