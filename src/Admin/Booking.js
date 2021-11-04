import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuths from '../Hooks/useAuths';
import { useParams } from "react-router";
import './Booking.css';

const Booking = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} =  useAuths();
    const {id} = useParams();
    const [resort, setResort] = useState({});

    useEffect(() =>{
        const url = `http://localhost:7000/resorts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setResort(data))
    }, []);

    // console.log(resort);

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
                alert('Booked the resort successfully');
            }
        });
    };

    return (
        <section id="booking">
            <h2 className="text-5xl text-center">Book <span className="resort-name">{resort.name}</span></h2>
            
            <div className="container mx-auto mt-6">
                <div className="grid grid-cols-2">
                    <div>
                        <img src={resort?.img} alt="" />
                    </div>
                    <div>
                        <form id="booking-form" onSubmit={handleSubmit(onConfirm)}>
                            
                            <input defaultValue={user.displayName} {...register("displayName", { required: true })} />

                            <input defaultValue={user.email} {...register("email", { required: true })} />

                            <input defaultValue={resort.name} {...register("name", { required: true })} />

                            <input defaultValue={resort.location} {...register("location", { required: true })} />

                            <input defaultValue={resort.img} {...register("img", { required: true })} />

                            <input defaultValue={resort.price} {...register("price", { required: true })} />
                         
                            

                            <input type="submit"  value="Click to confirm"/>
                            
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Booking;