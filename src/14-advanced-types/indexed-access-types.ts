interface AudioTrack {
  title: string;
  duration: number;
  artist: string;
}

type TrackTitle = AudioTrack["title"];
type TrackDetails = AudioTrack["title" | "artist"];

const title: TrackTitle = "Midnight Signals";

const details: TrackDetails = "Neon Echoes";

console.log("Track title:", title);
console.log("Track detail:", details);
