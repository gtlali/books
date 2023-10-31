import React from "react";
import BookShow from "./BookShow";

// Receive the props called books from dashboard.
export default function BookList({ books, onDelete ,onEdit}) {
  const renderedBooks = books.map((book) => {
    return <BookShow onEdit= {onEdit} onDelete={onDelete} key={book.id} book={book} />;
  });

  return <div className='book-list'>{renderedBooks}</div>;
}
