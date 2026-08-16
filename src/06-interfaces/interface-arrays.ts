interface Movie {
  id: number;
  title: string;
  rating: number;
}

const movies: Movie[] = [
  {
    id: 101,
    title: "Beyond the Horizon",
    rating: 8.4
  },
  {
    id: 102,
    title: "Silent Valley",
    rating: 7.9
  },
  {
    id: 103,
    title: "Midnight Train",
    rating: 8.7
  }
];

movies.forEach((movie) => {
  console.log(movie.title);
  console.log(movie.rating);
});