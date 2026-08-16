interface Movie {
  title: string;
  director: string;
  duration: number;
  rating: number;
}

type MovieCard = Pick<Movie, "title" | "rating">;

const card: MovieCard = {
  title: "The Silent Orbit",
  rating: 8.7
};

console.log("Movie:", card.title);
console.log("Rating:", card.rating);
