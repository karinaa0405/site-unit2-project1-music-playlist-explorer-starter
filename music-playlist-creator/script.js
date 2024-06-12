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

span.addEventListener("click", () => {
    modal.style.display = "none";
});

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", () => {
        modal.style.display = "block";
        
        
            

    });
    
    // span.addEventListener("click", () => {
    //     modal.style.display = "none";
    // });
}

let likeButton = document.getElementsByClassName("emoji");
let numLikes = document.getElementsByClassName("numLikes");

for (let j = 0; j < likeButton.length; j++) {
    likeButton[j].addEventListener("click", () => {
        let count = numLikes[j].textContent;
        count++;
        numLikes[j].textContent = count;
    });
}