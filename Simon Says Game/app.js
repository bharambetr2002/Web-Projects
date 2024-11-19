// Game sequence generated randomly
let gameSeq = [];

// User inputs sequence
let userSeq = [];

// Total buttons available
let seq = ["yellow", "violet", "red", "purple"];

// Game state variables
let gameStarted = false; // Tracks if the game has started
let level = 0; // Current level

// Selecting the heading element to display game information
let h2 = document.querySelector("h2");

// Event listener for keypress to start the game
document.addEventListener("keypress", function () {
  if (gameStarted == false) {
    console.log("Game Started");
    gameStarted = true;

    levelup(); // Begin the first level
  }
});

// Function to create a flash effect on the game's buttons
function gameFlash(btn) {
  btn.classList.add("flash"); // Add flash class
  setTimeout(function () {
    btn.classList.remove("flash"); // Remove after 250ms
  }, 250);
}

// Function to create a flash effect for user's button click
function userFlash(btn) {
  btn.classList.add("userflash"); // Add userflash class
  setTimeout(function () {
    btn.classList.remove("userflash"); // Remove after 250ms
  }, 250);
}

// Function to progress the game to the next level
function levelup() {
  level++; // Increment level
  h2.innerText = `Level ${level}`; // Update the heading with the current level

  // Generate a random color and add to the game sequence
  let randIdx = Math.floor(Math.random() * seq.length); // Random index
  let randColor = seq[randIdx]; // Random color
  let randbtn = document.querySelector(`.${randColor}`); // Select button by class

  gameFlash(randbtn); // Flash effect for the randomly chosen button
  gameSeq.push(randColor); // Add the color to the game sequence
  console.log(gameSeq); // Log the current game sequence

  userSeq = []; // Reset user sequence for the new level
}

// Function triggered when a user clicks a button
function btnPressed() {
  let btn = this; // `this` refers to the clicked button
  userFlash(btn); // Apply flash effect to the button

  // Get the button's ID (color) and add to user sequence
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor); // Add clicked color to user sequence
  console.log(`User sequence: ${userSeq}`); // Log user's input sequence

  checkAnswer(); // Check if user's sequence matches the game sequence
}

// Function to check the user's input against the game sequence
function checkAnswer() {
  // Compare user's sequence step by step
  let currentIdx = userSeq.length - 1; // Get the current index to check

  // If user input does not match the game sequence
  if (userSeq[currentIdx] !== gameSeq[currentIdx]) {
    console.log("Wrong answer! Game over."); // Log game over message
    h2.innerText = "Game Over! Press any key to restart."; // Display game over text
    gameStarted = false; // Reset game state
    level = 0; // Reset level
    gameSeq = []; // Clear game sequence
    userSeq = []; // Clear user sequence
    return; // Exit function
  }

  // If user completes the current level successfully
  if (userSeq.length === gameSeq.length) {
    console.log("Level Complete!"); // Log level complete message
    setTimeout(levelup, 1000); // Move to next level after 1 second
  }
}

// Add click event listeners to all buttons
let allBtns = document.querySelectorAll(".btn"); // Select all buttons there
for (let btn of allBtns) {
  btn.addEventListener("click", btnPressed); // Attach the `btnPressed` function to each button
}
