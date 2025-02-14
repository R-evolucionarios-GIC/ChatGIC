class ChatWebSocket {
    constructor(url) {
        this.url = url;
        this.ws = null;
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
        this.messageCallbacks = [];
        
        this.connect();
    }

    connect() {
        try {
            this.ws = new WebSocket(this.url);

            this.ws.onopen = () => {
                console.log("WebSocket Connected");
                this.reconnectAttempts = 0;
            };

            this.ws.onclose = () => {
                console.log("WebSocket Disconnected");
                this.attemptReconnect();
            };

            this.ws.onerror = (error) => {
                console.error("WebSocket Error:", error);
            };

            this.ws.onmessage = (event) => {
                this.handleMessage(event.data);
            };
        } catch (error) {
            console.error("WebSocket Connection Error:", error);
            this.attemptReconnect();
        }
    }

    attemptReconnect() {
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.reconnectAttempts++;
            console.log(`Attempting to reconnect... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
            setTimeout(() => this.connect(), 1000 * Math.pow(2, this.reconnectAttempts));
        }
    }

    handleMessage(data) {
        try {
            const message = JSON.parse(data);
            this.messageCallbacks.forEach(callback => callback(message));
        } catch (error) {
            console.error("Error parsing message:", error);
        }
    }

    sendMessage(message) {
        if (this.ws?.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({
                type: "chat",
                content: message,
                timestamp: new Date().toISOString()
            }));
        } else {
            console.error("WebSocket is not connected");
        }
    }

    onMessage(callback) {
        this.messageCallbacks.push(callback);
    }

    disconnect() {
        if (this.ws) {
            this.ws.close();
        }
    }
}

// Para usar o WebSocket, descomente e adicione a URL do WebSocket
// const chatWs = new ChatWebSocket('ws://seu-servidor-websocket');