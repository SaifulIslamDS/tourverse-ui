import React from 'react';

const ResortTable = (props) => {
    const {name, img, location, price, description } = props.rsrt;

    return ( 
    <>
        <tr className="text-left">
            <td className="text-xl">{name}</td>
            <td><img src={img} alt="" /></td> 
            <td>{location}</td>
            <td>{price}</td>
            <td>{description}</td>
            <td><button className="px-4 py-1 bg-yellow-500 text-white">Update</button></td>
            <td><button className="px-4 py-1 bg-red-700 text-white">Delete</button></td>
        </tr>
    </>
    );
};

export default ResortTable;