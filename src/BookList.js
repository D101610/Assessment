import React from 'react';
import './index.css';
import { Link } from 'react-router'

//product list in homepage
const BookList = ({books, listClick,addToCar,seeDetail}) => {
  return (
      <div className='col-md-2' >
        <h2>Products list</h2>
        <div >
            {books.map((book) => {
            return (
            <div  class="booklistClass" key={book.id} onClick={() => listClick(book)}>
              <img id='imgId' src={book.image}/>
              <h4>{book.title}  price:{book.price} </h4>
              <button onClick={() => seeDetail(book)}> details </button>
              <button onClick={() => addToCar(book)}> cart </button>
            </div>
            )
            })}
            </div>
      </div>
  );
};

export default BookList;
