class ChatUI {
    constructor() {
        this.messageForm = document.getElementById('messageForm');
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        this.messagesContainer = document.getElementById('messagesContainer');
        this.messageTemplate = document.getElementById('messageTemplate');
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Form submission
        this.messageForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });

        // Input validation
        this.messageInput.addEventListener('input', () => {
            this.sendButton.disabled = !this.messageInput.value.trim();
        });

        // Auto-resize textarea
        this.messageInput.addEventListener('input', () => {
            this.autoResizeTextarea();
        });

        // Enter to send, Shift+Enter for new line
        this.messageInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                if (!this.sendButton.disabled) {
                    this.handleSubmit();
                }
            }
        });
    }

    autoResizeTextarea() {
        this.messageInput.style.height = 'auto';
        this.messageInput.style.height = this.messageInput.scrollHeight + 'px';
    }

    addMessage(content, isUser = true) {
        const messageElement = this.messageTemplate.content.cloneNode(true);
        const messageDiv = messageElement.querySelector('.message');
        const messageContent = messageElement.querySelector('.message-content');
        
        messageDiv.classList.add(isUser ? 'user' : 'ai');
        messageContent.textContent = content;

        // Add AI avatar for AI messages
        if (!isUser) {
            const avatarDiv = messageElement.querySelector('.message-avatar');
            const avatarImg = document.createElement('img');
            avatarImg.src = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-site-QNrgAjnfy7RJfuONu2pq5NsVEc9Uy2.png";
            avatarImg.alt = "ChatGIC AI Avatar";
            avatarDiv.appendChild(avatarImg);
        }

        this.messagesContainer.appendChild(messageElement);
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    async handleSubmit() {
        const message = this.messageInput.value.trim();
        if (!message) return;

        // Add user message
        this.addMessage(message, true);

        // Clear input
        this.messageInput.value = '';
        this.messageInput.style.height = 'auto';
        this.sendButton.disabled = true;

        // Simulate AI response (replace with actual WebSocket/API call)
        setTimeout(() => {
            this.addMessage("O instituto de computação fica localizado ali atrás daquele lugarzinho, depois do tal do IME, onde o vento faz curva e os elefantes andam nas ruas.", false);
        }, 1000);
    }
}

// Initialize chat
const chat = new ChatUI();