"use client";

import { useState } from 'react';

export default function BookList({ books, onDeleteBook, onUpdateBook, isAdmin }) {
  const [editingBook, setEditingBook] = useState(null);

  const handleEdit = (book) => {
    setEditingBook(book);
  };

  const handleUpdate = () => {
    onUpdateBook(editingBook);
    setEditingBook(null);
  };

  return (
    <div className="book-list">
      <h2>Books</h2>
      {books.map((book) => (
        <div key={book.Title} className="book-item card">
          <div className="card-body">
            {editingBook && editingBook.Title === book.Title ? (
              <div>
                <input
                  value={editingBook.Title}
                  onChange={(e) => setEditingBook({...editingBook, Title: e.target.value})}
                  className="input"
                />
                <input
                  value={editingBook.Authors}
                  onChange={(e) => setEditingBook({...editingBook, Authors: e.target.value})}
                  className="input"
                />
                <input
                  value={editingBook.Publisher}
                  onChange={(e) => setEditingBook({...editingBook, Publisher: e.target.value})}
                  className="input"
                />
                <input
                  value={editingBook.Year}
                  onChange={(e) => setEditingBook({...editingBook, Year: e.target.value})}
                  className="input"
                />
                <button onClick={handleUpdate} className="btn btn-primary">Save</button>
              </div>
            ) : (
              <div>
                <h3>{book.Title}</h3>
                <p>Authors: {book.Authors}</p>
                <p>Publisher: {book.Publisher}</p>
                <p>Year: {book.Year}</p>
                {isAdmin && (
                  <>
                    <button onClick={() => handleEdit(book)} className="btn btn-secondary">Edit</button>
                    <button onClick={() => onDeleteBook(book.Title)} className="btn btn-danger">Delete</button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
