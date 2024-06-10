const apiUrl = 'http://localhost:8000/api/song';

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
let song = [];

const audio = document.getElementById('audio');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const playButton = document.getElementById('play');
const playIcon = playButton.querySelector('i');

// Função para carregar a música
function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
    cover.src = song.cover;
}

// Função para carregar músicas da API
function fetchSongs() {
    fetch('/api/songs')
        .then(response => response.json())
        .then(data => {
            songs = data;
            loadSong(songs[currentSongIndex]);
        })
        .catch(error => console.error('Erro ao buscar músicas:', error));
}

// Função para tocar a música anterior
function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(songs[currentSongIndex]);
    audio.play();
    updatePlayIcon();
}

// Função para tocar a próxima música
function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    loadSong(songs[currentSongIndex]);
    audio.play();
    updatePlayIcon();
}

// Função para alternar entre play e pause
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

// Função para atualizar o ícone de play/pause
function updatePlayIcon() {
    if (audio.paused) {
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    } else {
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    }
}

// Adiciona eventos aos botões
prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);
playButton.addEventListener('click', togglePlayPause);

// Evento para tocar a próxima música quando a atual terminar
audio.addEventListener('ended', nextSong);

// Carrega as músicas da API ao iniciar
fetchSongs();
