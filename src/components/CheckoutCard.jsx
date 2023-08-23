import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutCard = ({product, quantity}) => {
	const navigate = useNavigate();	

  const onClick = useCallback(() => {
    navigate(`/product/${product.id}`)
  },[product,navigate]);

  return (
    <div className="cart-item" onClick={onClick}>
			<img src={product.image} alt={product.name} />
			<div>
				<p>{product.name}</p>
				<p>Price: {product.price}</p>
				<p>Quantity: {quantity}</p>
			</div>
    </div>
  )
}

export default CheckoutCard;