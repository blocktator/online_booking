const express = require('express');
const app = express();
const port = 3000;

// Routes
app.get('/', (req, res) => {
    res.send('Coming soon');
});

app.get('/edit', (req, res) => {
    res.send('Coming soon');
});

app.get('/update', (req, res) => {
    res.send('Coming soon');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 