import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetailView from './components/ProductDetailView';
import Navbar from './components/Navbar';
import products from './products';
import Cart from './components/Cart'

function App() {
  const [productCount, setProductCount] = useState(new Array(products.length).fill(0))
  const handleProductCount = (idx, val) => {
		setProductCount((prevCount) => {
			let newArray = [...prevCount]
			newArray[idx] = val;
			return newArray;
		})
	}
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home products={products} productCount={productCount} handleProductCount={handleProductCount}/>}/>
        <Route path ="/product/:id" element={<ProductDetailView countArray={productCount} handleProductCount={handleProductCount}/>} />
        <Route path="/cart" element={<Cart products={products} productCount={productCount} />} />
        <Route path = '*' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
