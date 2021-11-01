import React from 'react';
import { Link } from 'react-router-dom';
import useAuths from '../../Hooks/useAuths';
import './Header.css';
import logo from '../../Images/tourverse.png';

const Header = () => {
    const {user, handleSignOut} = useAuths();
    return (
        <header id="header">
            <div className="container mx-auto flex">
                <div className="grid grid-cols-3">
                    <div id="logo">
                        <img src={logo} className="" alt="Tourverse - escape to the nature"/>
                    </div>
                    <div className="nav col-span-2">
                        <Link to="/">Home</Link>
                        <Link to="/manageresorts">Manage Resorts</Link>
                        <Link to="/bookings">Bookings</Link>

                        { 
                            (user.email) ? (
                            <>
                                <Link to="/ressorts/add">Add resort</Link>
                                <span>{user.email}</span>
                                <Link to="/login"><button onClick={handleSignOut}>Logout</button></Link>
                            </>
                            ) : (<Link to="/login">Login</Link>)
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;