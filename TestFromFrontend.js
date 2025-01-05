const express = require('express');
const router = express.Router();

// Define the test route
router.get('/test', (req, res) => {
    res.json({ message: 'Backend connected via TestFromFrontend.js!' });
});

module.exports = router;
