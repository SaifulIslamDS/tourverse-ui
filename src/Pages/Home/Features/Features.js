import React from 'react';
import feature from '../../../Images/feature.jpg';
import './Features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faMapMarked } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
    return (
        <section id="features">
            <h2 className="text-center text-5xl mb-10">What makes Tourverse different?</h2>
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-10">
                    <div className="feature-img">
                        <img src={feature} alt="" />
                    </div>
                    <div className="feature-col">

                        <p className="f-icon"><FontAwesomeIcon icon={faMapMarked} /></p>

                        <h2 className="text-4xl mb-6">Things To Do</h2>
                        <ul className="feature-list pl-10">
                            <li className="li-icon"> <FontAwesomeIcon icon={faBullseye} /> Tourverse camp</li>
                            <li className="li-icon"> <FontAwesomeIcon icon={faBullseye} /> Water Sports</li>
                            <li className="li-icon"> <FontAwesomeIcon icon={faBullseye} /> Cycling</li>
                            <li className="li-icon"> <FontAwesomeIcon icon={faBullseye} /> Kids fun activities</li>
                            <li className="li-icon"> <FontAwesomeIcon icon={faBullseye} /> Boating</li>
                            <li className="li-icon"> <FontAwesomeIcon icon={faBullseye} /> Canoeing & Kayaking</li>
                            <li className="li-icon"> <FontAwesomeIcon icon={faBullseye} /> Outdoor sports</li>
                            <li className="li-icon"> <FontAwesomeIcon icon={faBullseye} /> 9D Movies</li>
                            <li className="li-icon"> <FontAwesomeIcon icon={faBullseye} /> And many more ...</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;