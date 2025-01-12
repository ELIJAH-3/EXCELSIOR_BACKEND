const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const log = require('./logger.js');

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.BACKEND_PORT || 5000;

app.use(cors()); // Enable CORS for frontend communication
app.use(express.json()); // Parse JSON bodies

app.use('/api', require('./TestFromFrontend'));
app.use('/homepage', require('./homepage'));

const database = require('./database')
database.connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  log.debug('Connected to the MySQL database');
});

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Excelsior API');
});

// Start server
app.listen(port, () => {
  log.debug(`Server running on http://localhost:${port}`);
});
