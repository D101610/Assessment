import React from 'react';

//product details
const Bookdetail = ({currentBook, addToCar}) => {
    if (!currentBook) return <div className='col-md-4'><h2>选择图书</h2></div>
    return (
        <div className='col-md-4'>
            <h2>Product Details</h2>
            <h3>{currentBook.title}</h3>
            <img id='imgId' src={currentBook.image}/>
            <p>price:{currentBook.price}</p>
            <p>NO.:{currentBook.id}</p>
            <button onClick={() => addToCar(currentBook)}>
                add to cart
            </button>
        </div>
    );
};

export default Bookdetail;