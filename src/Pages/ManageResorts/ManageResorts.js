import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageResorts.css';

const ManageResorts = () => {
    const [resorts, setResorts] = useState([]);
    //use useEffects hook to load data 
    useEffect(() => {
        fetch("http://localhost:5000/resorts/")
        .then(res => res.json())
        .then(data => setResorts(data));
    }, []);

    const handleDeleteResort = id => {
        const confirmation = window.confirm("Are you sure you want to delete this resort?");
        if (confirmation) {            
            const url = `http://localhost:5000/resorts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Resort was successfully deleted')
                    const remainingResorts = resorts.filter(resort => resort._id !== id); 
                    setResorts(remainingResorts);
                }
            });
        }
    }

    const handleUpdateResort = id => {
        const confirmation = window.confirm("Are you sure you want to update this resort?")
        if (confirmation) { 
            //
        }
    }

    return (
        <section id="manage-resorts">
            <h2 className="text-5xl mb-10">Manage your resorts from here</h2>
            <div className="container mx-auto">
                <div className="grid">
                    <div>
                        <table style={{"width": "100%"}} id="resort-table"> 
                            {/* Resort table headings  */}
                            <tr>
                                <th>Name</th>
                                <th>Image</th> 
                                <th>Location</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>

                            {/* Resort table data  */}

                            {
                                resorts.map(resort => 
                                <tr key={resort._id} className="text-left">
                                    <td className="text-xl">{resort.name}</td>
                                    <td><img src={resort.img} alt="" /></td> 
                                    <td>{resort.location}</td>
                                    <td>{resort.price}</td>
                                    <td>{resort.description}</td>
                                    <td>
                                        <Link to={`/ressorts/update/${resort._id}`}><button onClick={handleUpdateResort} className="px-4 py-1 bg-yellow-500 text-white">Update</button></Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteResort(resort._id)} className="px-4 py-1 bg-red-700 text-white">Delete</button>
                                    </td>
                                </tr>
                                )
                            }

                            {/* {
                                resortTable.map(rsrt => <ResortTable
                                    key={resortTable.name}
                                    rsrt={rsrt}
                                />)
                            } */}
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageResorts;