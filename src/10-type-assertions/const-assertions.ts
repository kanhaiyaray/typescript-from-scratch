const weekdays = ["Monday", "Wednesday", "Friday"] as const;

const firstDay = weekdays[0];

console.log("Available days:", weekdays);
console.log("First selected day:", firstDay);

function scheduleMeeting(day: (typeof weekdays)[number]): void {
  console.log("Meeting scheduled for:", day);
}

scheduleMeeting("Monday");
scheduleMeeting("Friday");
