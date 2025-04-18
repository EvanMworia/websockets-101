const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5500 }, () => {
	console.log('WebSocket Server is running on ws://localhost:5500');
});

wss.on('connection', (ws) => {
	console.log('New client connected!');

	ws.send('👋 Welcome to the WebSocket server!');
	// event driven listenning for message
	ws.on('message', (message) => {
		console.log('Received:', message);
		ws.send(`You said: ${message}`);
	});
	//event driven to listen for disconnection from client
	ws.on('close', () => {
		console.log('Client disconnected');
	});
});
