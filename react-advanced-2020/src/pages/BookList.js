import React from 'react'
import { Link } from 'react-router-dom';

function BookList() {
  return (
    <div>
      <h1>BookList</h1>
      <Link to="/books/1">Books 1</Link>
      <br />
      <Link to="/books/2">Books 2</Link>
      <br />
      <Link to="/books/new" >New Book</Link>
    </div>
  );
}

export default BookList
