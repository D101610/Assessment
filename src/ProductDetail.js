import React from 'react';
import './index.css';

//product detail
//declare constant
const ProductDetail = ({currentProduct, addToCar,addToFavorite}) => {
currentProduct=1;
  if (!currentProduct) return <div className='col-md-4'><h2>please choose the product!</h2></div>
  return (
      <div id='ProductDetailID'>
        <div id='detailTitleID'>
          <img id='detailImgId' src='../../image/2.jpg'/>
        </div>
        <div  id='detailTailID'>
          <h3>T-shirt{currentProduct.title}</h3>
          <p>price: $30{currentProduct.price}</p>
          <p>NO.215963254:{currentProduct.id}</p>
          <p>Introduction:</p>
          <button onClick={() => addToFavorite(currentProduct)}>
            favorite
          </button>
          <button onClick={() => addToCar(currentProduct)}>
            add to cart
          </button>
        </div>
      </div>
  );
};
export default ProductDetail;