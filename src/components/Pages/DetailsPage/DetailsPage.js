import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm/CheckOutForm';
import DetailsPart from './DetailsPart/DetailsPart';
import Review from './Review/Review';
import ReviewForm from './Review/Review';
import ServiceItems from './ServiceItems/ServiceItems';

const DetailsPage = () => {
    const [services, setServices] = useState([])
    const service = useLoaderData();

    useEffect(() => {
        fetch('https://kidspace-server-site.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            }
            );

    }, []);
    return (
        <div className="bg-gradient-to-t from-black via-slate-800 to-gray-900">
            <div className="grid grid-cols-1  lg:grid-cols-4 text-slate-300">
                <div className="grid col-span-1 mt-20 ml-4 lg:sticky top-20">
                    <h1 className="text-3xl font-bold text-center text-red-300"><span className="text-green-500">Available</span> Services</h1>
                    {services.map(service => <ServiceItems service={service} key={service._id}></ServiceItems>)}
                </div>
                <div className="grid col-span-2">
                    <DetailsPart service={service}></DetailsPart>
                </div>
                <div className="grid col-span-1">
                    <CheckOutForm service={service}></CheckOutForm>
                </div>

            </div>
            <Review service={service}></Review>
        </div>
    );
};

export default DetailsPage;