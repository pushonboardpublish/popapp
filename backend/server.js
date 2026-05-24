const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage
let popups = [];

// Routes

// Get all pop-ups
app.get('/api/popups', (req, res) => {
  res.json(popups);
});

// Create a new pop-up
app.post('/api/popups', (req, res) => {
  const { title, message, type } = req.body;
  
  if (!title || !message) {
    return res.status(400).json({ error: 'Title and message are required' });
  }

  const popup = {
    id: uuidv4(),
    title,
    message,
    type: type || 'info',
    createdAt: new Date()
  };

  popups.push(popup);
  res.status(201).json(popup);
});

// Delete a pop-up
app.delete('/api/popups/:id', (req, res) => {
  const { id } = req.params;
  popups = popups.filter(p => p.id !== id);
  res.json({ message: 'Pop-up deleted' });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'PopApp backend is running!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 PopApp backend running on http://localhost:${PORT}`);
});
