import React from 'react';
import useAuths from '../Hooks/useAuths';
import './Booking.css';

const Booking = () => {
    const {user} =  useAuths();
    const handleConfirmBtn = (e) => {

        e.preventDefault();
    } 

    return (
        <section id="booking">
            <h2 className="text-5xl">Book the resort</h2>
            
            <form id="booking-form">
                <input type="text" placeholder="Your name" value={user.displayName}/>
                <input type="email" placeholder="Your email" value={user.email}/>
                <input type="submit" onclick={handleConfirmBtn} value="Click to confirm"/>
            </form>

        </section>
    );
};

export default Booking;