"use client";

import { useState, useEffect } from 'react';
import { useAuth } from './_lib/auth';
import AddBookForm from './_components/AddBookForm';
import BookList from './_components/BookList';
import LoginForm from './_components/LoginForm';

export default function Home() {
  const [books, setBooks] = useState([]);
  const { user, logout } = useAuth();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch('/api/books');
    const data = await response.json();
    setBooks(data);
  };

  const handleAddBook = async (newBook) => {
    await fetch('/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook)
    });
    fetchBooks();
  };

  const handleDeleteBook = async (title) => {
    await fetch('/api/books', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    });
    fetchBooks();
  };

  const handleUpdateBook = async (updatedBook) => {
    await fetch('/api/books', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedBook)
    });
    fetchBooks();
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1 className="title">Library Management</h1>
        </div>
        <div className="card-body">
          {user ? (
            <>
              <p>Welcome, {user.username}!</p>
              <button onClick={logout} className="btn btn-secondary">Logout</button>
              {user.role === 'admin' && <AddBookForm onAddBook={handleAddBook} />}
              <BookList 
                books={books} 
                onDeleteBook={handleDeleteBook}
                onUpdateBook={handleUpdateBook}
                isAdmin={user.role === 'admin'}
              />
            </>
          ) : (
            <LoginForm />
          )}
        </div>
      </div>
    </div>
  );
}
