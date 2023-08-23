import CheckoutCard from "./CheckoutCard";

const Cart = ({products , productCount }) => {
	let noProduct = true;
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
					<button className="checkout-button" >
						Make Payment
					</button>
				</div>
			)}
		</div>
	)
}

export default Cart;