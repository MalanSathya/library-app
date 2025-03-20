"use client"; // Marking this file as a Client Component

import { useState } from 'react';

export default function AddBookForm({ onAddBook }) {
  const [newBook, setNewBook] = useState({
    Title: '',
    Authors: '',
    Publisher: '',
    Year: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook(newBook);
    setNewBook({ Title: '', Authors: '', Publisher: '', Year: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={newBook.Title}
        onChange={(e) => setNewBook({...newBook, Title: e.target.value})}
        required
      />
      <input
        type="text"
        placeholder="Authors"
        value={newBook.Authors}
        onChange={(e) => setNewBook({...newBook, Authors: e.target.value})}
        required
      />
      <input
        type="text"
        placeholder="Publisher"
        value={newBook.Publisher}
        onChange={(e) => setNewBook({...newBook, Publisher: e.target.value})}
        required
      />
      <input
        type="number"
        placeholder="Year"
        value={newBook.Year}
        onChange={(e) => setNewBook({...newBook, Year: e.target.value})}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
}
