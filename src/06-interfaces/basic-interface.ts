interface Book {
  title: string;
  author: string;
  pages: number;
  available: boolean;
}

const book: Book = {
  title: "The TypeScript Journey",
  author: "Daniel Brooks",
  pages: 320,
  available: true
};

console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.available);