// Select button, input field, and unordered list (ul) from the DOM
let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

// Add an event listener to the button to create a new list item when clicked
btn.addEventListener("click", function () {
  // Check if input is not empty before adding it to the list
  if (input.value.trim() !== "") {
    // Create a new <li> element
    let item = document.createElement("li");

    // Set the text of the <li> element to the value entered in the input field
    item.innerText = input.value;

    // Create a new 'Delete' button
    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete"; // Button text
    delbtn.classList.add("delete"); // Add a class for styling or targeting

    // Append the 'Delete' button to the new <li> item
    item.appendChild(delbtn);

    // Add the new <li> item to the unordered list (ul)
    ul.appendChild(item);

    // Clear the input field after adding the item
    input.value = "";
  } else {
    // Optionally alert the user or prevent empty items from being added
    alert("Please enter a valid item!");
  }
});

// Add an event listener to the unordered list (ul) to handle item deletion
ul.addEventListener("click", function (event) {
  // Check if the clicked element is a button
  if (event.target.nodeName == "BUTTON") {
    // Find the parent <li> of the clicked button and remove it
    let listItem = event.target.parentElement;
    listItem.remove(); // Remove the <li> item from the list

    // Log that the item was deleted (optional)
    console.log("Deleted");
  }
});
