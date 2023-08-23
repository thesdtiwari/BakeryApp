import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ product, count, handleProductCount, idx }) => {
  const navigate = useNavigate();	

  const onClick = useCallback(() => {
    navigate(`/product/${product.id}`)
  },[product,navigate]);

	const increaseCount = useCallback(() => {
    handleProductCount(idx,count+1);
	},[handleProductCount, idx, count]);
  
	const decreaseCount = useCallback(() => {
    handleProductCount(idx,count-1);
	},[handleProductCount, idx, count]);
	
  return (
    <div className="product-card" >
      <div className="product-image" onClick={onClick}>
        <img src={product.image} alt={product.name} />
      </div>
      <h2>{product.name}</h2>
      <p className="product-price">{product.price}</p>
      <p className="product-description ">{product.description}</p>
      <div className="buttons">
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

export default Card;