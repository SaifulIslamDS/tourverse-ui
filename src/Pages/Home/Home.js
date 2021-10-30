import React from 'react';
import Banner from '../Home/Banner/Banner';
import Resorts from '../Home/Resorts/Resorts';
import Features from './Features/Features';
import './Home.css';
import Living from './Living/Living';

const Home = () => {

    return (
        <div>
            <Banner />
            <Resorts />
            <Features />
            <Living />
        </div>
    );


};

export default Home;
