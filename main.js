const express = require('express');
const app = express();
const port = 3000;

// Define routes for different pages
app.get('/', (req, res) => {
  res.send('This is the homepage');
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.get('/contact', (req, res) => {
  res.send('This is the contact page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
