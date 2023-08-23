import React, {useCallback} from 'react';
import { useParams } from 'react-router-dom';
import products from '../products';

const ProductDetailView = ({countArray, handleProductCount}) =>  {
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);
  const count = countArray[id];
  
  const increaseCount = useCallback(() => {
    handleProductCount(id,count+1);
	},[handleProductCount, id, count]);
  
	const decreaseCount = useCallback(() => {
    handleProductCount(id,count-1);
	},[handleProductCount, id, count]);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className='product-detail-page'>
      <div className="product-detail">
        <div className='product-img'>
          <img src={product.image} alt={product.name} />
        </div>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.description}</p>
        {count ? 
          ( <div>
              <button className="add-to-cart-button" onClick={decreaseCount}>-</button> 
              <button className="add-to-cart-button">{count}</button> 
              <button className="add-to-cart-button" onClick={increaseCount}>+</button> 
            </div>
          )
            : 
          <div>
            <button className="add-to-cart-button" onClick={increaseCount}>Add to Cart</button>
          </div>
        }        
      </div>
    </div>
  );
}

export default ProductDetailView;
