interface Pagination {
  page: number;
  limit: number;
  total: number;
}

interface PaginatedResponse<T> {
  items: T[];
  pagination: Pagination;
}

const response: PaginatedResponse<string> = {
  items: ["TypeScript", "JavaScript", "Node.js"],
  pagination: {
    page: 1,
    limit: 3,
    total: 10
  }
};

console.log("Paginated response:", response);


export {};