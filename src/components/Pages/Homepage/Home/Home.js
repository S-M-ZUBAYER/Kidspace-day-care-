import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../../UseTItle/UseTitle';
import ServiceCard from '../../ServicesPage/ServiceCard/ServiceCard';
import Events from '../Events/Events';
import Header from '../Header/Header';
import OurNews from '../OurNews/OurNews';

const Home = () => {
    useTitle('Home')
    const [limitedServices, setLimitedServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/limitedServices')
            .then(res => res.json())
            .then(data => {
                setLimitedServices(data)
            }
            );

    }, []);
    return (
        <div className="bg-gradient-to-t from-black via-slate-800 to-black">
            <Header></Header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-12 py-12 bg-gradient-to-t from-black via-slate-800 to-gray-900 text-slate-400">
                {limitedServices.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)}

            </div>




            <OurNews></OurNews>
            <Events></Events>
        </div>
    );
};

export default Home;