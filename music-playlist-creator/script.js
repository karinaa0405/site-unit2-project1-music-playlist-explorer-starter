data.playlists.forEach(function(playlist) {
    console.log(playlist.playlist_name);
    
    let newPlaylistCard = document.createElement('div');
    newPlaylistCard.className = "playlist";
    console.log(newPlaylistCard.className);

    let playlistImg = document.createElement('img');
    playlistImg.className = "playlistImg";
    playlistImg.src = playlist.playlist_art;
    newPlaylistCard.appendChild(playlistImg);
    
    let playlistTitle = document.createElement('h4');
    playlistTitle.className = "playlistTitle";
    playlistTitle.textContent = playlist.playlist_name;
    newPlaylistCard.appendChild(playlistTitle);
    
    let playlistCreator = document.createElement('p');
    playlistCreator.className = "playlistCreator";
    playlistCreator.textContent = playlist.playlist_creator;
    newPlaylistCard.appendChild(playlistCreator);

    let likesContainer = document.createElement('div');
    likesContainer.className = "likes";

    let emoji = document.createElement('span');
    emoji.className = "emoji";
    emoji.textContent = "❤️";
    likesContainer.appendChild(emoji);

    let likeCount = document.createElement('span');
    likeCount.className = "numLikes";
    likeCount.textContent = playlist.likeCount;
    likesContainer.appendChild(likeCount);

    newPlaylistCard.appendChild(likesContainer);

    let container = document.querySelector(".playlist-cards");
    container.appendChild(newPlaylistCard);
});


// Get the modal
var modal = document.getElementsByClassName("modal-overlay")[0];

// Get the button that opens the modal
var img = document.getElementsByClassName("playlistImg");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// span.addEventListener("click", () => {
//     modal.style.display = "none";
// });

for (let i = 0; i < img.length; i++) {
    
    img[i].addEventListener("click", () => {
        console.log(i);
        modal.style.display = "block";
        let playlist = data.playlists[i];

        let modalPlaylistImg = document.getElementById("modalImg");
        modalPlaylistImg.src = playlist.playlist_art;

        let modalTitle = document.getElementById("modalTitle");
        modalTitle.textContent = playlist.playlist_name;

        let modalCreator = document.getElementById("modalCreatorTitle");
        modalCreator.textContent = playlist.playlist_creator;
        
        playlist.songs.forEach(function(song) {
            console.log(song);

            let songsCard = document.createElement("div");
            songsCard.className = "song";

            let songImg = document.createElement("img");
            songImg.className = "songImg";
            songImg.src = song.cover_art;
            songsCard.appendChild(songImg);

            let songInfo = document.createElement("div");
            songInfo.className = "songInfo";
            songsCard.appendChild(songInfo);

            let songTitle = document.createElement("p");
            songTitle.className = "songTitle";
            songTitle.textContent = song.title;
            songInfo.appendChild(songTitle);

            let songArtist = document.createElement("p");
            songArtist.className = "songArtist";
            songArtist.textContent = song.artist;
            songInfo.appendChild(songArtist);

            let songAlbum = document.createElement("p");
            songAlbum.className = "songAlbum";
            songAlbum.textContent = song.album;
            songInfo.appendChild(songAlbum);

            let songLength = document.createElement("p");
            songLength.className = "songLength";
            songLength.textContent = song.duration;
            songsCard.appendChild(songLength);

            let container = document.querySelector(".modal-content");
            container.appendChild(songsCard);
            
        });
        
        span.addEventListener("click", () => {
            modal.style.display = "none";

            let songsCard = document.getElementsByClassName("song");
            
            for (let i = 0; i < songsCard.length; i++) {
                songsCard[i].remove();
            }
        });

    });
    
}

let shuffleBtn = document.getElementById("shuffleBtn")
shuffleBtn.addEventListener("click", () => {
    let songList = document.getElementsByClassName("song");
    let songs = Array.from(songList.children);
    songs.sort(() => Math.pow);
    songs.forEach(function(song) {
        songList.appendChild(song);
    });
});


let likeButton = document.getElementsByClassName("emoji");
let numLikes = document.getElementsByClassName("numLikes");

for (let j = 0; j < likeButton.length; j++) {
    likeButton[j].addEventListener("click", () => {
        let count = numLikes[j].textContent;
        count++;
        numLikes[j].textContent = count;
    });
}
