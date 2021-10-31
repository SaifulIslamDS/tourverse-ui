import React, { useEffect, useState } from 'react';
import ResortTable from '../ResortTable/ResortTable';
import './ManageResorts.css';

const ManageResorts = () => {
    const [resortTable, setResortTable] = useState([]);
    //use useEffects hook to load data 
    useEffect(() => {
        fetch("http://localhost:5000/resorts")
        .then(res => res.json())
        .then(data => {
            setResortTable(data);
        })
    }, []);
    
    return (
        <section id="manage-resorts">
            <h2 className="text-5xl mb-10">Manage your resorts from here</h2>
            <div className="container mx-auto">
                <div className="grid grid-cols-6">
                    <div className="resorts-nav">
                        <button className="text-white bg-green-800 px-6 py-2">All resorts</button>
                        <button className="text-white bg-green-800 px-6 py-2 mt-6">Add resort</button>
                    </div>
                    <div className="col-span-5">
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
                                resortTable.map(rsrt => <ResortTable
                                    key={resortTable.name}
                                    rsrt={rsrt}
                                />)
                            }
                            
                        </table>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ManageResorts;