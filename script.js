document.getElementById('send-button').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim()) {
        addMessageToChatWindow('User', userInput);
        document.getElementById('user-input').value = '';
        // Simulate AI response
        setTimeout(() => {
            const aiResponse = generateAIResponse(userInput); // Placeholder for AI response generation
            addMessageToChatWindow('AI', aiResponse);
            showFeedbackPoll();
        }, 1000);
    }
});

function addMessageToChatWindow(sender, message) {
    const chatWindow = document.getElementById('chat-window');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender.toLowerCase());
    messageElement.textContent = `${sender}: ${message}`;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function generateAIResponse(userInput) {
    // Placeholder function for generating AI response
    return `AI suggests: ${userInput}`;
}

function showFeedbackPoll() {
    // Logic to show feedback poll after AI response
    const feedbackPoll = document.createElement('div');
    feedbackPoll.innerHTML = `
        <p>Was this response helpful?</p>
        <button onclick="submitFeedback('yes')">Yes</button>
        <button onclick="submitFeedback('no')">No</button>
    `;
    document.getElementById('chat-window').appendChild(feedbackPoll);
}

function submitFeedback(response) {
    console.log('User feedback:', response);
    document.getElementById('chat-window').lastChild.remove(); // Remove feedback poll after submission
}

// Show feedback button after 2-3 interactions
let interactionCount = 0;
document.getElementById('send-button').addEventListener('click', () => {
    interactionCount++;
    if (interactionCount >= 2) {
        document.getElementById('feedback-button').style.display = 'block';
    }
});
