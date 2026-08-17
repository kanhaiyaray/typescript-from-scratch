const heading = document.querySelector("h1");

if (heading) {
  heading.textContent = "Updated by TypeScript";
  console.log("Heading found:", heading.textContent);
} else {
  console.log("Heading not found.");
}

export {};