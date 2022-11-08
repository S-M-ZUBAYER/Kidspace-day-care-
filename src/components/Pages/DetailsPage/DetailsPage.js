import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm/CheckOutForm';
import ServiceItems from './ServiceItems/ServiceItems';

const DetailsPage = () => {
    const [services, setServices] = useState([])
    const service = useLoaderData();

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            }
            );

    }, []);
    console.log(service)
    return (
        <div className="bg-gradient-to-t from-black via-slate-800 to-gray-900">
            <div className="grid grid-cols-1  lg:grid-cols-4 text-slate-300">
                <div className="grid col-span-1 mt-20 ml-4 lg:sticky top-20">
                    <h1 className="text-3xl font-bold text-center text-red-300"><span className="text-green-500">Available</span> Services</h1>
                    {services.map(service => <ServiceItems service={service} key={service._id}></ServiceItems>)}
                </div>
                <div className="grid col-span-2">
                    <h1>Details</h1>
                </div>
                <div className="grid col-span-1">
                    <CheckOutForm service={service}></CheckOutForm>
                </div>

            </div>
        </div>
    );
};

export default DetailsPage;