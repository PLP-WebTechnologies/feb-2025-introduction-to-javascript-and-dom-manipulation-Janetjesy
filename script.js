// Function to change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("description").textContent = "Text has been updated!";
});

// Function to toggle element visibility
document.getElementById("toggleElementBtn").addEventListener("click", function() {
  let box = document.getElementById("box");
  box.classList.toggle("hidden");
});
