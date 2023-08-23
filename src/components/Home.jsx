import React, { useCallback } from 'react';
import Card from "./Card";
import { useNavigate } from 'react-router-dom';


const Home = ({products, productCount, handleProductCount}) => {
	const navigate = useNavigate();	
	
	const handleCheckout = useCallback(() => {
		let buyList = [];
		for(let i=0;i<productCount.length;++i) {
			if(productCount[i]) {
				const {image,description,...info} = products[i];
				buyList.push({
					...info,
					count : productCount[i]
				})
			}
		}
		console.log(`You have ordered ${buyList.length} products`, buyList);
		navigate(`/cart`)
	},[productCount,navigate,products])

	return (
		<div>
			<header className="header">
			<h1>Welcome to Goodies Cookies Bakery</h1>
			</header>
			<div className="" style={{ display : "flex", flexDirection : 'column' }}>
				<div className="product-list">
				{products.map((product, idx) => (
					<Card key={product.id} product={product} count={productCount[idx]} idx={idx} handleProductCount={handleProductCount} />
				))}
				</div>
				<div className="checkout-div">
					<button className="checkout-button" onClick={handleCheckout}>
						Checkout
					</button>
				</div>
			</div>
		</div>
	)
}

export default Home;