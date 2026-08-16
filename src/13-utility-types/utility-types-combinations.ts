interface LibraryBook {
  title: string;
  author: string;
  year: number;
  available: boolean;
}

type BookPreview = Pick<
  LibraryBook,
  "title" | "author"
>;

type EditableBook = Partial<
  Omit<LibraryBook, "year">
>;

type BookInventory = Readonly<
  Record<string, BookPreview>
>;

const previews: BookInventory = {
  BK101: {
    title: "Beyond the Horizon",
    author: "Mira Sen"
  }
};

const update: EditableBook = {
  available: false
};

console.log("Book preview:", previews.BK101);
console.log("Book update:", update);
