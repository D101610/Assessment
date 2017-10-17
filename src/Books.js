import React, { Component } from 'react';
import BookList from './BookList';
import ProductionDetail from './ProductDetail';


class Books extends Component {
  constructor() {
    super()
    this.handleListClick = this.handleListClick.bind(this);
    this.handleAddToCar = this.handleAddToCar.bind(this);
    this.state = {
      flag:1,
      currentBook: null,
      car: [],
      totalNum: 0,
      total: 0
    };
  }

  handleListClick(book) {
    this.setState({
      currentBook: book,
      flag:0
    });
  }


  handleAddToCar(currentBook) {
    let totalNum = this.state.totalNum;
    let car = this.state.car;
    let total = this.state.total;
    let exist = false;
    if (car.length) {
      car.forEach(book => {
        if (book.id === currentBook.id) {
          book.number += 1;
          totalNum += 1;
          exist = true;
          this.setState({
            totalNum
          });
        }
      });
    }


    if (!exist) {
      car = car.concat(Object.assign({}, currentBook, {number:1}));
      totalNum += 1;
      this.setState({
          car,
          totalNum
      }); 
    }

    total = car.map(book => (book.price * book.number)).reduce((prev, cur) => prev + cur);
    this.setState({
      total
    });
  }

  render() {
    if (this.state.flag){
    return (
      <div className='row'>
      <BookList books={this.props.books}  currentBook={this.state.currentBook} listClick={this.handleListClick}  addToCar={this.handleAddToCar}   seeDetail={this.handleSeeDetails}/>     
      </div>
    );
  }else{
     return (
     <div className='row'>
     <ProductionDetail currentBook={this.state.currentBook} addToCar={this.handleAddToCar} addToFavorite={this.handleAddToFavorite}/>
     </div>
  );
  }
}
}

//product list information
Books.defaultProps = {
    books: [
    {
      id: 1,
      image:'../../image/2.jpg',
      category: 'CSS',
      title: 'T-shirt（male）',
      author: 'Eric A. Meyer',
      price: 42
    },
    {
      id: 2,
      image:'../../image/2.jpg',
      category: 'JS',
      title: 'T-shirt（male）',
      author: 'Nicholas C.Zakas',
      price: 69
    },
    {
      id: 3,
      image:'../../image/3.jpg',
      category: 'CSS',
      title: 'coat（male）',
      author: 'Bard',
      price: 25
    },
    {
      id: 4,
      image:'../../image/3.jpg',
      category: 'CSS',
      title: 'coat（male）',
      author: 'Bard',
      price: 25
    },
    {
      id: 5,
      image:'../../image/3.jpg',
      category: 'CSS',
      title: 'coat（male）',
      author: 'Bard',
      price: 25
    },
    {
      id: 6,
      image:'../../image/3.jpg',
      category: 'CSS',
      title: 'coat（female）',
      author: 'Bard',
      price: 25
    },
       {
      id: 7,
      image:'../../image/3.jpg',
      category: 'CSS',
      title: 'coat（female）',
      author: 'Bard',
      price: 25
    },
       {
      id: 8,
      image:'../../image/3.jpg',
      category: 'CSS',
      title: 'coat（female）',
      author: 'Bard',
      price: 25
    },
       {
      id: 9,
      image:'../../image/3.jpg',
      category: 'CSS',
      title: 'coat（male）',
      author: 'Bard',
      price: 25
    },
       {
      id: 10,
      image:'../../image/2.jpg',
      category: 'CSS',
      title: 'coat（male）',
      author: 'Bard',
      price: 25
    }
  ]
};

export default Books;
