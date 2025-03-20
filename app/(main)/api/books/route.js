import { NextResponse } from 'next/server';
import { getAllBooks, saveBooks } from '../../_lib/books';

export async function GET() {
  const books = getAllBooks();
  return NextResponse.json(books);
}

export async function POST(request) {
  const newBook = await request.json();
  const books = getAllBooks();
  books.push(newBook);
  saveBooks(books);
  return NextResponse.json(newBook, { status: 201 });
}

export async function DELETE(request) {
  const { title } = await request.json();
  let books = getAllBooks();
  books = books.filter(book => book.Title !== title);
  saveBooks(books);
  return NextResponse.json({ message: 'Book deleted' });
}

export async function PUT(request) {
  const updatedBook = await request.json();
  let books = getAllBooks();
  books = books.map(book => 
    book.Title === updatedBook.Title ? {...book, ...updatedBook} : book
  );
  saveBooks(books);
  return NextResponse.json(updatedBook);
}
