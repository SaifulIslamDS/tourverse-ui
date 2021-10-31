import React, { useEffect, useState } from 'react';
import ResortTable from '../ResortTable/ResortTable';
import './ManageResorts.css';

const ManageResorts = () => {
    const [resortTable, setResortTable] = useState([]);
    //use useEffects hook to load data 
    useEffect(() => {
        fetch("https://tourverse-ss.herokuapp.com/resorts")
        .then(res => res.json())
        .then(data => {
            setResortTable(data);
        })
    }, []);
    
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