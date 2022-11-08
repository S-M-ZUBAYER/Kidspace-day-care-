import React from 'react';
import Events from '../Events/Events';
import Header from '../Header/Header';
import OurNews from '../OurNews/OurNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurNews></OurNews>
            <Events></Events>
        </div>
    );
};

export default Home;