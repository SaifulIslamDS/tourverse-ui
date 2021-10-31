import React from 'react';

const ResortTable = (props) => {
    const {name, img, location, price, description } = props.rsrt;

    return ( 
    <>
        <tr>
            <td>{name}</td>
            <td><img src={img} alt="" /></td> 
            <td>{location}</td>
            <td>{price}</td>
            <td>{description}</td>
            <td><button>Update</button></td>
            <td><button>Delete</button></td>
        </tr>
    </>
    );
};

export default ResortTable;