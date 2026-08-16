function checkMessage(message: string | null | undefined): void {
  if (message) {
    console.log("Message received:", message);
  } else {
    console.log("No message was provided.");
  }
}

checkMessage("TypeScript makes JavaScript safer.");
checkMessage("");
checkMessage(null);
