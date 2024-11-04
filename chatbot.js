document.getElementById('sendButton').addEventListener('click', async () => {
    const userMessage = document.getElementById('userInput').value;
    addMessageToChatbox('User', userMessage);

    // Call the backend API
    const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
    });
    const data = await response.json();
    addMessageToChatbox('Bot', data.message);

    document.getElementById('userInput').value = ''; // Clear input field
});

function addMessageToChatbox(sender, message) {
    const chatbox = document.getElementById('chatbox');
    const newMessage = document.createElement('p');
    newMessage.textContent = `${sender}: ${message}`;
    chatbox.appendChild(newMessage);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}
