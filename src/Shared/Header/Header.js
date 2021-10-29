import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../Images/tourverse.png';

const Header = () => {
    return (
        <header id="header">
            <div className="container mx-auto flex">
                <div className="grid grid-cols-2">
                    <div id="logo">
                        <img src={logo} className="" alt="Tourverse - escape to the nature"/>
                    </div>
                    <div className="nav">
                        <Link to="/">Home</Link>
                        <Link to="/placeorder">Place Order</Link>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;