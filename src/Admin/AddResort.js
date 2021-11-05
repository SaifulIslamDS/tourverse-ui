import React from 'react';
import './AddResort.css';
import { useForm } from "react-hook-form";


const AddResort = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddResort = (data) => {
        fetch('https://tourverse-ss.herokuapp.com/resorts/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Successfully added a resort.')
            }
        })
    }
    
    return (
        <section id="add-resort">
            <h2 className="text-5xl mb-10">Add resort</h2>
            <form onSubmit={handleSubmit(handleAddResort)} id="add-resort-form">

                <input type="text" {...register("name",{ required: true })} placeholder="Name of resort"/>

                <input type="url" {...register("img", { required: true })} placeholder="Image URL"  className="img-url" rows="1"/>

                <input type="text" {...register("location", { required: true })} placeholder="Location"/>

                <input type="number" {...register("price", { required: true })}  placeholder="Price"/>

                <textarea {...register("description")}  placeholder="Description" />

                {errors.exampleRequired && <span>This field is required</span>}

                
                <input type="submit" value="Add Resort" />
            </form>
        </section>
    );
};

export default AddResort;