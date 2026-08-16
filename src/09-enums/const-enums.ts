const enum MusicGenre {
  Rock = "ROCK",
  Jazz = "JAZZ",
  Classical = "CLASSICAL",
  Electronic = "ELECTRONIC"
}

const favoriteGenre: MusicGenre = MusicGenre.Jazz;

console.log("Favorite genre:", favoriteGenre);

function playMusic(genre: MusicGenre): void {
  console.log("Playing:", genre);
}

playMusic(MusicGenre.Rock);
playMusic(MusicGenre.Classical);
