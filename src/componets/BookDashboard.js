import React from "react";
import axios from "axios"; // install axios using npm install axios
import { useState, useEffect } from "react";
import HeaderSection from "./header";
import FooterSection from "./footer";
import BookCreate from "./BookCreate";
import BookList from "./BookList";

// https://picsum.photos for getting random pictures
// npm run start
//npm run server

export default function BookDashboard() {
  const [books, setBooks] = useState([]); //defaulted to empty array of books

  // Get the books from the rest api
  const fetchBooks = async () => {
    const fResp = await axios.get("http://localhost:3020/books");
    setBooks(fResp.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // function to actually update the booklist
  const editBookByID = async (id, newTitle) => {
   
    const response = await axios.put(`http://localhost:3020/books/${id}`, {
      title: newTitle,
    });
    if (response.statusText === "OK") {
      console.log(response);
    }
    // function to update the element inside an array.
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      } // { ...book, title: newTitle };

      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBooksById = async (id) => {
    const response = await axios.delete(`http://localhost:3020/books/${id}`);
    if (response.statusText === "OK") {
      console.log(response);
    }
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBooks);
  };
  const createBook = async (title) => {
    const creresp = await axios.post("http://localhost:3020/books", {
      title: title,
    });
    console.log(creresp.data);
    const updatebooks = [
      ...books,
      creresp.data,
      //{ id: Math.round(Math.random() * 99), title: title },
    ];
    console.log("need sometitle", title);
    setBooks(updatebooks);
  };

  return (
    <div>
      <HeaderSection />
      <div className='block'>
        {books.length}
        <div className='box'>
          <h1>Reading List of Books</h1>
          <div className='app'>
            <BookList
              onEdit={editBookByID}
              books={books}
              onDelete={deleteBooksById}
            />
          </div>
        </div>
        <BookCreate onCreate={createBook} />
      </div>
      <FooterSection />
    </div>
  );
}
