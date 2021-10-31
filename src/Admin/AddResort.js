import React, { useRef } from 'react';
import './AddResort.css';

const AddResort = () => { 
    const nameRef = useRef();
    const imageRef = useRef();
    const locRef = useRef();
    const priceRef = useRef();
    const destRef =useRef();

    const handleAddResort = (e) => {
        const name = nameRef.current.value;
        const image = imageRef.current.value;
        const location = locRef.current.value;
        const price = priceRef.current.value;
        const description = destRef.current.value;

        const newResort = {name, image, location, price, description};

        fetch('http://localhost:5000/resorts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newResort)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Successfully added a resort.')
                e.target.reset();
            }
        })
        e.preventDefault();
    }


    return (
        <section id="add-resort">
            <h2 className="text-5xl mb-10">Add resort</h2>
            <form onSubmit={handleAddResort} id="add-resort-form">
                <input type="text" ref={nameRef} placeholder="Name of resort"/>
                <textarea className="img-url" type="text" ref={imageRef} placeholder="Image URL" rows="1"/>
                <input type="text" ref={locRef} placeholder="Location"/>
                <input type="number" ref={priceRef} placeholder="Price"/>
                <textarea ref={destRef} placeholder="Description" />
                
                <input type="submit" value="Add" />
            </form>
            


        </section>
    );
};

export default AddResort;