const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const log = require('./logger.js');

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.BACKEND_PORT || 5000;

app.use(cors()); // Enable CORS for frontend communication
app.use(express.json()); // Parse JSON bodies

app.use('/api', require('./TestFromFrontend'));


const connection = mysql.createConnection({
  host:     process.env.DB_HOST,            // Your Google Cloud SQL host
  user:     process.env.DB_USER,            // Your MySQL username
  password: process.env.DB_PASSWORD,        // Your MySQL password
  database: process.env.DB_NAME,            // Your database name
  port:     process.env.DB_PORT || 3306,    // Default backend port
});

connection.connect((err) => {
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
