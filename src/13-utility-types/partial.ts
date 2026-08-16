interface Conference {
  title: string;
  city: string;
  seats: number;
  online: boolean;
}

const conferenceUpdate: Partial<Conference> = {
  seats: 450,
  online: true
};

console.log("Conference update:", conferenceUpdate);
