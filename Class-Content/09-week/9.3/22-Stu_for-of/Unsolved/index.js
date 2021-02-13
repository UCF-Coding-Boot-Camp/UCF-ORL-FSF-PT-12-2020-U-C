const songs = document.querySelectorAll("li");
console.log(songs);

for (const song of songs) {
    song.classList.add("red");
};