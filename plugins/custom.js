const { bot } = require('../lib'); // Import bot function

// Define your custom bot command
bot(
	{
		pattern: 'custom ?(.*)', // Command pattern (e.g., '.custom <args>')
		fromMe: true,           // Set to true if only you can use it; false if public
		desc: 'Your custom command description here', // Description of the command
		type: 'utility',        // Type/category of your command (e.g., 'utility', 'search')
	},
	async (message, match) => {
		// 'match' contains the argument provided after the command
		if (!match) {
			// If no argument is provided, send a help message
			return await message.send('```Usage: .custom <your argument here>\nExample: .custom hello```');
		}

		// Your custom logic goes here
		const input = match.trim(); // Clean the input
		let response;

		// Example: Check user input and respond accordingly
		if (input.toLowerCase() === 'hello') {
			response = 'Hi there! How can I assist you?';
		} else if (input.toLowerCase() === 'time') {
			const currentTime = new Date().toLocaleTimeString();
			response = `The current time is: ${currentTime}`;
		} else {
			response = `You said: "${input}". This is your custom response!`;
		}

		// Send the response back to the user
		return await message.send('```' + response + '```');
	}
);
