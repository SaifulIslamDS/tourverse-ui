import React from 'react';
import feature from '../../../Images/feature.jpg';

const Features = () => {
    return (
        <section id="features">
            <h2 className="text-center text-4xl">What makes Tourverse different?</h2>
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-10">
                    <div className="feature-img">
                        <img src={feature} alt="" />
                    </div>
                    <div className="feature-col">
                        <h2>Things To Do</h2>
                        <ul className="feature-list">
                            <li>Tourverse camp</li>
                            <li>Water Sports</li>
                            <li>Cycling</li>
                            <li>Kids fun activities</li>
                            <li>Boating</li>
                            <li>Canoeing & Kayaking</li>
                            <li>Outdoor sports</li>
                            <li>9D Movies</li>
                            <li>And many more ...</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;