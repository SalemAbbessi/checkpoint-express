const express = require('express');
const app = express();
const { checkWorkingHours } = require('./middleware/middleware.js')
const port = 3000; // You can choose any port you like

// Define routes for each page
app.get('/', (req, res) => {
  res.send(`
    <h1 >Home Page</h1>
    <nav>
      <a href="/">Home</a> |
      <a href="/services">Our Services</a> |
      <a href="/contact">Contact Us</a>
    </nav>
  `);
});

app.get('/services', (req, res) => {
  res.send(`
    <h1>Our Services</h1>
    <nav>
      <a href="/">Home</a> |
      <a href="/services">Our Services</a> |
      <a href="/contact">Contact Us</a>
    </nav>
  `);
});

app.get('/contact', (req, res) => {
  res.send(`
    <h1>Contact Us</h1>
    <nav>
      <a href="/">Home</a> |
      <a href="/services">Our Services</a> |
      <a href="/contact">Contact Us</a>
    </nav>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
