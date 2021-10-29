import React from 'react';
import './Resort.css';

const Resort = (props) => {
    const {name, img, location, description, price} = props.resort;
    return (
        <div className="resort">
            <h2 className="text-5xl text-yellow-300 mb-5 ">{name}</h2>
            <img className="resort-image" src={img} alt="" />
            <h4 className="text-xl">Location: {location}</h4>
            <p className="pt-4 pb-4 text-justify">{description}</p>
            <h3 className="text-3xl text-yellow-400">Price : {price}</h3>
            <button className="bg-green-900 px-10 py-2 text-xl hover:bg-red-900 mt-4">Book now!</button>
        </div>
    );
};

export default Resort;