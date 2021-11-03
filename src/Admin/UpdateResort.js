import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './UpdateResort.css';

const UpdateResort = () => {
    const {id} = useParams();
    const [resort, setResort] = useState({});
    // load resorts
    useEffect(() => {
        const url = `http://localhost:7000/resorts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setResort(data))
    }, []);


    // Update different fields 

    const handlNameChange = e => {
        const updatedName = e.target.value;
        const updatedResort = {
            name: updatedName, 
            image: resort.image,  
            location: resort.location,  
            price: resort.price,  
            description : resort.description,  
        };
        setResort(updatedResort);
    }
    const handlImageChange = e => {
        const updatedImage = e.target.value;
        const updatedResort = {
            name: resort.name, 
            image: updatedImage,  
            location: resort.location,  
            price: resort.price,  
            description : resort.description,  
        };
        setResort(updatedResort);
    }
    const handleLocationChange = e => {
        const updatedLocation = e.target.value;
        const updatedResort = {
            name: resort.name, 
            image: resort.image,  
            location: updatedLocation,  
            price: resort.price,  
            description : resort.description,  
        };
        setResort(updatedResort);
    }
    const handlePriceChange = e => {
        const updatedPrice = e.target.value;
        const updatedResort = {
            name: resort.name, 
            image: resort.image,  
            location: resort.location,  
            price: updatedPrice,  
            description : resort.description,  
        };
        setResort(updatedResort);
    }
    const handleDescriptionChange = e => {
        const updatedDescription = e.target.value;
        const updatedResort = {
            name: resort.name, 
            image: resort.image,  
            location: resort.location,  
            price: resort.price,  
            description : updatedDescription,  
        };
        setResort(updatedResort);
    }


    
    // Update form 
    const handleUpdateResort = e => {
        const url = `http://localhost:7000/resorts/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(resort)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                alert('Updated successfully');
                setResort({});
            }
            // console.log(data);
        });

        e.preventDefault();
    }
   


    return (
        <section id="update-resort">
            <h2 className="text-5xl">Update <span className="resort-name">{resort.name}</span></h2>
            <p className="text-2xl mt-4">id: {id}</p>

            {/* Update form  */}
            
            <form onSubmit={handleUpdateResort} id="update-resort-form">
                <input type="text" value={resort.name || ''} onChange={handlNameChange} placeholder="Name of resort"/>

                <input type="url" value={resort.image || ''} onChange={handlImageChange} pattern="https://.*" placeholder="Image URL"  className="img-url" rows="1"/>

                <input type="text" value={resort.location || ''} onChange={handleLocationChange}  placeholder="Location"/>

                <input type="number" value={resort.price||''} onChange={handlePriceChange} placeholder="Price"/>

                <textarea value={resort.description || ''} onChange={handleDescriptionChange} placeholder="Description" />
                
                <input type="submit" value="Update Resort" />
            </form>



        </section>
    );
};

export default UpdateResort;
