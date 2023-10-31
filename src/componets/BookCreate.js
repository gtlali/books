import React from "react";
import { useState } from "react";

export default function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className='box'>
      <div className='book-create'>
        <h3>Add Book</h3>
        <form onSubmit={handleSubmit}>
          <label> Title </label>
          <input className='input' value={title} onChange={handleChange} />
          <button className='button'>Create!</button>
        </form>
      </div>
    </div>
  );
}
