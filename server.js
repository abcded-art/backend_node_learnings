const express = require('express');
const app = express();
const port = 8020;

app.get('/', (req, res) => {
	res.send(`Hello world!`);
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
