// Select the button element from the DOM
let btn = document.querySelector("button");

// Add an event listener to the button that triggers when clicked
btn.addEventListener("click", function () {
  // Select the <h3> element where the random color will be displayed
  let h3 = document.querySelector("h3");

  // Call the function to generate a random color
  let randomColor = getRandomColor();

  // Set the inner text of the <h3> element to show the random color
  h3.innerText = randomColor;

  // Select the <div> element to change its background color
  let div = document.querySelector("div");

  // Set the background color of the <div> to the generated random color
  div.style.backgroundColor = randomColor;
});

// Function to generate a random RGB color value
function getRandomColor() {
  // Generate a random value for red, green, and blue (between 0 and 255)
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  // Construct the RGB color string
  let color = `rgb(${red},${green},${blue})`;

  // Return the random color value
  return color;
}
