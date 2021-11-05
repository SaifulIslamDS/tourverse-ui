import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuths from '../Hooks/useAuths';
import { useParams } from "react-router";
import './Booking.css';

const Booking = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} =  useAuths();
    const {id} = useParams();
    const [resort, setResort] = useState([]);

    useEffect(() =>{
        const url = `https://tourverse-ss.herokuapp.com/resorts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setResort(data))
    }, []);

    // console.log(resort);

    const onConfirm = data => {
        const url = `https://tourverse-ss.herokuapp.com/bookings`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if (result.insertedId) {
                alert('Booked the resort successfully');
            }
        });
    };

    return (
        <section id="booking">
            <h2 className="text-5xl text-center">Book <span className="resort-name">{resort.name}</span></h2>
            
            <div className="container mx-auto mt-6">
                <div className="grid grid-cols-2">
                    <div id="booking-detail">
                        <img src={resort.img} alt="" />
                        <h3>Location: {resort.location} </h3>
                        <h4>Price: {resort.price} / 24 hours</h4>
                        <p>Resort details: {resort.description}</p>
                    </div>
                    <div>
                        <form id="booking-form" onSubmit={handleSubmit(onConfirm)}>
                            
                            <input defaultValue={user.displayName} {...register("displayName", { required: true })} />

                            <input value={user.email} {...register("email", { required: true })} />

                            <input value={resort.name} {...register("name", { required: true })} />

                            <input value={resort.img} {...register("img", { required: true })} />

                            <input {...register("city", { required: true })} placeholder="Your city" />

                            <input {...register("phone", { required: true }) } placeholder="Your contact number"  />
                         
                            
                            <input type="submit"  value="Click to confirm"/>
                            
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Booking;