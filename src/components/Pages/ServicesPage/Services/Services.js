import React, { useEffect, useState } from 'react';
import Header from '../../Homepage/Header/Header';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            }
            );

    }, []);
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-12 py-12 bg-gradient-to-t from-black via-slate-800 to-gray-900 text-slate-400">
                {services.map(service => <ServiceCard service={service}></ServiceCard>)}
            </div>
        </div>

    );
};

export default Services;