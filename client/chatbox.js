// chatbox.js
document.addEventListener('DOMContentLoaded', () => {
    // Styles using template literals
    const styles = `
      body {
        font-family: Arial, sans-serif;
      }
  
      #chat-container {
        max-width: 400px;
        margin: 20px auto;
        border: 1px solid #ccc;
        padding: 10px;
      }
  
      #chat-messages {
        max-height: 300px;
        overflow-y: auto;
        margin-bottom: 10px;
      }
  
      #user-input {
        display: flex;
      }
  
      #message-input {
        flex-grow: 1;
        margin-right: 10px;
      }
  
      button {
        cursor: pointer;
      }
    `;
  
    // Create a style element and append it to the head
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
  
    // Create HTML structure
    const html = `
      <div id="chat-container">
        <div id="chat-messages"></div>
        <div id="user-input">
          <input type="text" id="message-input" placeholder="Type your message...">
          <button onclick="sendMessage()">Send</button>
        </div>
      </div>
    `;
  
    // Inject the HTML into the document body
    document.body.innerHTML = html;
  
    // JavaScript logic
    function sendMessage() {
      const messageInput = document.getElementById('message-input');
      const chatMessages = document.getElementById('chat-messages');
  
      const userMessage = messageInput.value.trim();
      if (userMessage === '') return;
  
      // Display user message in the chat
      displayMessage('User', userMessage, 'user');
  
      // TODO: Send userMessage to the server and get the bot's response
  
      // Clear the input field
      messageInput.value = '';
    }
  
    function displayMessage(sender, text, cssClass) {
      const chatMessages = document.getElementById('chat-messages');
      const messageDiv = document.createElement('div');
      messageDiv.className = cssClass;
      messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
      chatMessages.appendChild(messageDiv);
  
      // Scroll to the bottom to show the latest message
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });
  