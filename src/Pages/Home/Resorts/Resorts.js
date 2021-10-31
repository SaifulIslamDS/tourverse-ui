import React, { useEffect, useState } from 'react';
import Resort from '../Resort/Resort';
import './Resorts.css';

const Resorts = () => {
    const [resorts, setResorts] = useState([]);

      //use useEffects hook to load data 
      useEffect(() => {
        fetch("http://localhost:5000/resorts")
        .then(res => res.json())
        .then(data => setResorts(data))
    }, []);
    
    // console.log(resorts);

    return (
        <section id="resorts">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-14">
                {
                    //loop through cards with map method
                    resorts.map(resort => <Resort
                        key={resort.name}
                        resort={resort}
                    />)
                }
                </div>
            </div>
        </section>
    );
};

export default Resorts;