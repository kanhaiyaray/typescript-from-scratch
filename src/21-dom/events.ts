const button = document.createElement("button");

button.textContent = "Click Me";

button.addEventListener("click", () => {
  console.log("Button clicked!");
});

document.body.appendChild(button);

console.log("Button created.");
