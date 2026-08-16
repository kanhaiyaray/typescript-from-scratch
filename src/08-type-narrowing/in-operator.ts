interface Podcast {
  title: string;
  duration: number;
}

interface Course {
  title: string;
  lessons: number;
}

function showContent(content: Podcast | Course): void {
  if ("duration" in content) {
    console.log(
      `Podcast: ${content.title}, ${content.duration} minutes`
    );
  } else {
    console.log(
      `Course: ${content.title}, ${content.lessons} lessons`
    );
  }
}

const podcast: Podcast = {
  title: "Code Stories",
  duration: 42
};

const course: Course = {
  title: "Web Development Fundamentals",
  lessons: 18
};

showContent(podcast);
showContent(course);
