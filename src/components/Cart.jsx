import { useCallback } from "react";
import CheckoutCard from "./CheckoutCard";
import { useNavigate } from "react-router";

const Cart = ({products , productCount ,setAllCountToZero}) => {
	const navigation = useNavigate();
	let noProduct = true;
	const onClick = useCallback(() => {
		setAllCountToZero();
		navigation('/payment');
	},[setAllCountToZero,navigation]);

	return (
		<div className="cart-page">
			<div className="cart-items">
					{products.map((product,index) => {
							if(productCount[index]) noProduct = false;
							return productCount[index] ? (<CheckoutCard key={index} product = {product} quantity={productCount[index]}/>): '';
					})}
			</div>
			{noProduct ? <p className="no-selected">No Items Selected</p> : (
				<div className="checkout-div">
					<button className="checkout-button" onClick={onClick}>
						Make Payment
					</button>
				</div>
			)}
		</div>
	)
}

export default Cart;