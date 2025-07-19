// video.js

class Video {
    constructor(videoID, playlistID, videoTitle, videoURL, uploadedAt) {
        this.videoID = videoID;          // Unique identifier for the video (Primary Key)
        this.playlistID = playlistID;    // Foreign Key referencing Playlist(ID)
        this.videoTitle = videoTitle;    // Title of the video
        this.videoURL = videoURL;        // URL of the video
        this.uploadedAt = uploadedAt;    // Timestamp of when the video was uploaded
    }
}

module.exports = Video;
