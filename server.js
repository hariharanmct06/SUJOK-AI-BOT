const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable JSON body parsing
app.use(express.json());

// Serve static assets with no-cache headers to prevent browser caching issues
app.use(express.static(path.join(__dirname), {
  setHeaders: (res, filePath) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  }
}));

// Import and mount the Vercel serverless function handler to keep behavior identical
const chatHandler = require('./api/chat');
app.post('/api/chat', chatHandler);

// Start listening (only when run directly, not when required by Vercel serverless builder)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running successfully on http://localhost:${PORT}`);
  });
}

module.exports = app;
