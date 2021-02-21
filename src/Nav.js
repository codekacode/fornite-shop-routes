import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {

    const newStyle = {
        color: 'white'
    };
    
  return (
      <nav className="nav">
          <h3>Logo</h3>
          <ul className="nav__links">
            <Link style={newStyle} to="/about">
                <li>About</li>
            </Link>
            <Link style={newStyle} to="/shop">
                <li>Shop</li>
            </Link>
          </ul>
      </nav>
  );
}

export default Nav;
