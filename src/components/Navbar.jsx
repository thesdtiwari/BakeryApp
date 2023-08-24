import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Goodies Cookies</Link>
        <div className='nav-right-div'>
          <div className="nav-links">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-links">
            <Link to="/cart">Go to Cart</Link>
          </div>
          <div className="nav-links">
            <Link to="/orderstatus">Order Status</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
