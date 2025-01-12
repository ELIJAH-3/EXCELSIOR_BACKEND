const createDatabaseQuery= 'CREATE DATABASE IF NOT EXISTS excelsior;';
const createPlaylistTableQuery = `CREATE TABLE excelsior.playlist ( ID INT AUTO_INCREMENT PRIMARY KEY,NAME VARCHAR(255) NOT NULL,YouTubeID VARCHAR(255) NOT NULL,CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`;
const createVideoTableQuery =`CREATE TABLE videos (VideoID INT AUTO_INCREMENT PRIMARY KEY, PlaylistID INT NOT NULL, VideoTitle VARCHAR(255) NOT NULL, VideoURL VARCHAR(255) NOT NULL, UploadedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (PlaylistID) REFERENCES Playlist(ID) ON DELETE CASCADE );`;
const createLinkTableQuery =`CREATE TABLE link ( YOUTUBEID VARCHAR(255) NOT NULL,URL VARCHAR(512) NOT NULL);`;
const insertDummyStudentQuery = `INSERT INTO CRUD01.STUDENT (NAME, EMAIL) VALUES ('HARRY', 'HARRY@mail.com'), ('POTTER', 'POTTER@mail.com');`;
const queryAllStudents= "SELECT * FROM STUDENT ORDER BY ID ASC;";
const deleteStudentbyId= "DELETE FROM STUDENT WHERE ID = ? ;";

module.exports= {
    createDatabaseQuery,
    createPlaylistTableQuery,
    createVideoTableQuery,
    createLinkTableQuery,
    insertDummyStudentQuery,
    queryAllStudents,
    deleteStudentbyId
}