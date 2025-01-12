const log = require('./logger.js');

function getURLofVideoCollectorUsingPlaylistId(playlistID, numOfVideosToCollect, nextPageToken) {
    const BASE_URL = process.env.BASE_URL;
    const API_KEY = process.env.YouTube_API_KEY;

    if (!BASE_URL || !API_KEY) {
        log.error("BASE_URL or YouTube_API_KEY is missing in the environment variables.");
        throw new Error("Environment variables BASE_URL and YouTube_API_KEY must be defined.");
    }

    const urlFormed = `${BASE_URL}?part=snippet&playlistId=${playlistID}&maxResults=${numOfVideosToCollect}&pageToken=${nextPageToken}&key=${API_KEY}`;
    log.debug(`urlFormed: ${urlFormed}`);
    return urlFormed;
}

module.exports = {
    getURLofVideoCollectorUsingPlaylistId,
};