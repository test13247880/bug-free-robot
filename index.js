const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON in request body
app.use(bodyParser.json());

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Another route with a dynamic parameter
app.get('/greet/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

// Route to handle POST requests
app.post('/api/post-example', (req, res) => {
  const { data } = req.body;
  res.json({ message: `Received: ${data}` });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
