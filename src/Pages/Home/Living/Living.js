import React from 'react';
import SimpleSlider from '../LivingCarousel/LivingCarousel';

const Living = () => {
    return (
        <section id="living">
            <h2 className="text-center text-4xl">Luxurious living places</h2>
            <div className="container mx-auto">
                <div className="grid grid-cols-2 grid-10">
                    <div className="living-col">
                        <h2>Comfortable Stay</h2>
                        <p>Sarah Resort features 22 Premium King Rooms, 18 Superior King. 30 Superior Twin, 6 Deluxe King/Twin, and 1 Presidential Villa (3 B/R). All guests’ rooms & suites are designed with the latest state of the art technology and furnished in modern contemporary style, all to give the utmost comfortable work and sleep environment.</p>
                    </div>
                    <div className="living-corousel">
                        <SimpleSlider></SimpleSlider>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Living;