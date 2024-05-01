function sendMessage(message) {
  fetch("https://yourserver.com/send-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: message }),
  })
    .then((response) => response.json())
    .then((data) => console.log("Message sent:", data))
    .catch((error) => console.error("Error sending message:", error));
}
