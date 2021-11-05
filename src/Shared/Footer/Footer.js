import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../Images/tourverse.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faPinterest, faFlickr  } from '@fortawesome/free-brands-svg-icons'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container mx-auto">
                <div className="grid grid-cols-3">
                    <div>
                        <h2 className="footer-title" >About</h2>
                        <div className="flex">
                            <img className="footer-logo" src={logo} alt="" />
                            <div className="pl-6">
                                <h3 className="text-2xl">Tourverse</h3>
                                <p>escape to the nature</p>
                            </div>
                        </div>


                    </div>
                    <div>
                        <h2 className="footer-title" >Important Links</h2>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/manageresorts">Manage Resorts</Link></li>
                            <li><Link to="/bookings">Bookings</Link></li>
                            <li><Link to="/ressorts/add">Add resort</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="footer-title">We are in social media</h2>
                        <div id="social-icon">
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faYoutube} />
                            <FontAwesomeIcon icon={faPinterest} />
                            <FontAwesomeIcon icon={faFlickr} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;