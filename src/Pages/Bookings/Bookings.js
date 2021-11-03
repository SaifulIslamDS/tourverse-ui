import React, { useEffect, useState } from 'react';
import './Bookings.css';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:7000/bookings/`)
        .then(res => res.json())
        .then(data => setBookings(data))
    }, []);



    return (
        <section id="bookings">
            <h2 className="text-5xl mb-10">All of your bookings</h2>
            <div className="container mx-auto">
                <div className="grid">
                    <table style={{"width": "100%"}} id="resort-table"> 
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Photo</th>
                        </tr>

                        {
                            bookings.map(booking => 
                            <tr>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td><img src={booking.photo} alt="" /></td>
                            </tr>
                            )
                        }

                    </table>
                </div>
            </div>
        </section>
    );
};

export default Bookings;