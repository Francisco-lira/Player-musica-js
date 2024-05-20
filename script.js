const songs = [
    {
        title: "Snuff",
        artist: "Corey Taylor",
        src: "musicas/Corey Taylor - Snuff.mp3",
        cover: "imagens/snuff.jpg"
    },
    {
        title: "The Trooper",
        artist: "Iron Maiden",
        src: "musicas/Iron Maiden - The Trooper.mp3",
        cover: "imagens/Trooper.jpg"
    },
    {
        title: "Under The Graveyard",
        artist: "Ozzy Osbourne",
        src: "musicas/Ozzy Osbourne - Under The Graveyard.mp3",
        cover: "imagens/OzzyUnderTheGraveyard.jpg"
    }
];

let currentSongIndex = 0;

const audio = document.getElementById('audio');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const playButton = document.getElementById('play');
const playIcon = playButton.querySelector('i');

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
    cover.src = song.cover;
}

function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(songs[currentSongIndex]);
    audio.play();
    updatePlayIcon();
}

function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    loadSong(songs[currentSongIndex]);
    audio.play();
    updatePlayIcon();
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    } else {
        audio.pause();
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    }
}

function updatePlayIcon() {
    if (audio.paused) {
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    } else {
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    }
}

prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);
playButton.addEventListener('click', togglePlayPause);

audio.addEventListener('ended', nextSong);

loadSong(songs[currentSongIndex]);
updatePlayIcon();
