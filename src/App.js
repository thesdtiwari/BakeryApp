import './App.css';
import { useCallback, useState } from 'react';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetailView from './components/ProductDetailView';
import Navbar from './components/Navbar';
import products from './products';
import Cart from './components/Cart'
import Payment from './components/Payment';

function App() {
  const [productCount, setProductCount] = useState(new Array(products.length).fill(0))
  const handleProductCount = (idx, val) => {
		setProductCount((prevCount) => {
			let newArray = [...prevCount]
			newArray[idx] = val;
			return newArray;
		})
	}
  const setAllCountToZero = useCallback(() => {
    setProductCount(new Array(products.length).fill(0));
  },[setProductCount])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home products={products} productCount={productCount} handleProductCount={handleProductCount}/>}/>
        <Route path ="/product/:id" element={<ProductDetailView countArray={productCount} handleProductCount={handleProductCount}/>} />
        <Route path="/cart" element={<Cart products={products} productCount={productCount} setAllCountToZero={setAllCountToZero} />} />
        <Route path = '/*' element={<Payment />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
