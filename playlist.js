class Playlist {
    constructor(id, name, youtubeId, userId, numVideos, createdAt) {
        this.id = id;                // Unique identifier for the playlist
        this.name = name;            // Name of the playlist
        this.youtubeId = youtubeId;  // YouTube playlist ID
        this.userId = userId;        // ID of the user who owns the playlist
        this.numVideos = numVideos;  // Number of videos in the playlist
        this.createdAt = createdAt;  // Timestamp when the playlist was created
    }
}

module.exports = Playlist;
