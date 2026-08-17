const form = document.createElement("form");

const input = document.createElement("input");
input.name = "username";
input.placeholder = "Enter username";

form.appendChild(input);
document.body.appendChild(form);

form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();

  console.log("Username:", input.value);
});

console.log("Form created.");
