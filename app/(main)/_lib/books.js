import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), '_data', 'books.json');

export function getAllBooks() {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
}

export function saveBooks(books) {
  fs.writeFileSync(dataPath, JSON.stringify(books, null, 2));
}
