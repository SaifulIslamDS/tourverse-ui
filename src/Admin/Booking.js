import React from 'react';
import { useForm } from 'react-hook-form';
import useAuths from '../Hooks/useAuths';
import './Booking.css';

const Booking = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const {user} =  useAuths();

    const onConfirm = data => {
        const url = `http://localhost:7000/bookings`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            // console.log(result);
            if (result.insertedId) {
                alert('Order processed Successfully');
            }
        });
    };

    return (
        <section id="booking">
            <h2 className="text-5xl">Book the resort</h2>
            
            <form id="booking-form" onSubmit={handleSubmit(onConfirm)}>
                
                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />

                <input defaultValue={user.photoURL} {...register("photo")} />

                <input type="submit"  value="Click to confirm"/>
            </form>

        </section>
    );
};

export default Booking;