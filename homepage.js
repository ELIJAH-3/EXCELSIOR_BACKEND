const express = require('express');
const router = express.Router();
const log = require('./logger.js');
const { insertIntoPlaylistQuery } = require('./sqlQueries')
const database = require('./database')
const youTubeUtil = require('./youTubeUtil');

// Define the test route
router.get('/test', (req, res) => {
    res.json({ message: 'Backend connected via homepage.js!' });
});

router.post("/handlePlaylistInput", async (req, res) => {
    try {
        log.debug(`homepage.js Request body: ${req.body}`);
        const playlistID = req.body.playlistID;
        const userID = req.body.userID || 1;

        const value = ["ABC_NAME", "ABC", userID];
        const playlistName = await youTubeUtil.fetchPlaylistNameUsingPlaylistid(playlistID);
        database.executeSqlQueryWithValues(insertIntoPlaylistQuery, [playlistName, playlistID, userID]);

        log.debug(`homepage.js playlistID from GUI: ${playlistID}`);
        const urlFormed = youTubeUtil.getURLofVideoCollectorUsingPlaylistId(playlistID, 100, "");
        log.debug(`homepage.js urlFormed: ${urlFormed}`);
        res.json({ url: urlFormed });    //returns the value in json format
    } catch (err) {
        log.error("Error handling /handlePlaylistInput:", err);
        log.error(`homepage.js Stack trace:\n${err.stack}`);
        res.status(500).json({ error: "Internal server error." });
    }
})

module.exports = router;
