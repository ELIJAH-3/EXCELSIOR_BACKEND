const log = require('./logger.js');
const axios = require('axios');
const API_KEY = process.env.YouTube_API_KEY;

function getURLofVideoCollectorUsingPlaylistId(playlistID, numOfVideosToCollect, nextPageToken) {
    const BASE_URL="https://www.googleapis.com/youtube/v3/playlistItems";
    if (!API_KEY) {
        log.error("YouTube_API_KEY is missing in the environment variables.");
        throw new Error("Environment variables BASE_URL and YouTube_API_KEY must be defined.");
    }

    const urlFormed = `${BASE_URL}?part=snippet&playlistId=${playlistID}&maxResults=${numOfVideosToCollect}&pageToken=${nextPageToken}&key=${API_KEY}`;
    log.debug(`urlFormed: ${urlFormed}`);
    return urlFormed;
}
async function fetchPlaylistNameUsingPlaylistid(playlistID) {
    if (!API_KEY) {
        log.error("YouTube_API_KEY is missing in the environment variables.");
        throw new Error("Environment variable YouTube_API_KEY must be defined.");
    }
    const BASE_URL = "https://www.googleapis.com/youtube/v3/playlists";
    const url = `${BASE_URL}?part=snippet&id=${playlistID}&key=${API_KEY}`;
    log.debug(`youTubeUtil.js Requesting playlist info: ${url}`);

    try {
        const response = await axios.get(url);
        if (response.data.items.length === 0) {
            log.warn(`youTubeUtil.js No playlist found for ID: ${playlistID}`);
            return null;
        }

        const playlistName = response.data.items[0].snippet.title;
        log.info(`youTubeUtil.js Fetched playlist name: ${playlistName}`);
        return playlistName;

    } catch (error) {
        log.error(`youTubeUtil.js Error fetching playlist name: ${error.message}`);
        throw error;
    }
}

module.exports = {
    getURLofVideoCollectorUsingPlaylistId,
    fetchPlaylistNameUsingPlaylistid,
};