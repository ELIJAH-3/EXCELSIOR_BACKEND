const express = require('express');
const router = express.Router();
const log = require('./logger.js');
const youTubeUtil = require('./youTubeUtil');

// Define the test route
router.get('/test', (req, res) => {
    res.json({ message: 'Backend connected via homepage.js!' });
});

router.post("/handlePlaylistInput", (req, res) => {
    try {
        const playlistID = req.body.playlistID;
        log.debug(`homepage.js playlistID from GUI: ${playlistID}`);
        const urlFormed = youTubeUtil.getURLofVideoCollectorUsingPlaylistId(playlistID, 20, "");
        log.debug(`homepage.js urlFormed: ${urlFormed}`);
        res.json({ url: urlFormed });    //returns the value in json format
    } catch (err) {
        log.error("Error handling /handlePlaylistInput:", err);
        res.status(500).json({ error: "Internal server error." });
    }
})

module.exports = router;
