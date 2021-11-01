import React from 'react';
import './Banner.css';
import banner from '../../../Images/banner.jpg';

const Banner = () => {
    return (
        <section id="banner" className="text-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 pt-20 pb-20">
                    <div className="banner-text">
                        <h1 className="mt-6 mb-6 text-8xl"><span className="text-yellow-400">Tour</span>verse</h1>
                        <h3 className=" text-4xl">Escape to the nature</h3>
                        <button className=" bg-yellow-500 px-5 py-2 text-2xl mt-8 hover:bg-yellow-900 hover:text-indigo-300">Explore now</button>
                    </div>
                    <div className="banner-image">
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;