import React from 'react';
import './Resort.css';

const Resort = (props) => {
    const {name, img, location, description, price} = props.resort;
    return (
        <div className="resort">
            <h2 className="text-5xl text-yellow-300 mb-5 ">{name}</h2>
            <img className="resort-image" src={img} alt="" />   
            <h4 className="mt-4 text-yellow-400">Location: {location}</h4>
            <p className="pt-4 pb-4 text-lg">{description}</p>
            <h3 className="text-3xl text-yellow-400">Price : {price}</h3>
            <button className="book-btn">Book now!</button>
        </div>
    );
};

export default Resort;