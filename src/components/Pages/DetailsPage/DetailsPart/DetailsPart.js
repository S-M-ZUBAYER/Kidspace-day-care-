import React from 'react';
import FacilityCard from './FacilityCard/FacilityCard';

const DetailsPart = ({ service }) => {
    const { serviceName, price, rating, description, img, time, facility } = service;

    const messages = description?.split('$');
    // const messageArr = message.split('$');
    console.log(service)
    return (
        <div className="mt-12 mx-12 text-slate-200">
            <a href="#" class="block">
                <div class="flex justify-center ">
                    <strong
                        class="relative h-6 bg-black px-4 text-lg  uppercase leading-6 text-red-500"
                    >
                        {serviceName}
                    </strong>
                </div>

                <img
                    alt="Trainer"
                    src={img}
                    class="-mt-3 h-[350px] w-full object-cover sm:h-[450px]"
                />

                <h3 class="mt-4 text-base">
                    {messages.map(message => <p>{message} <br /> <br /></p>)}

                </h3>

                <div class="text-lg flex items-center justify-between font-medium text-orange-400">
                    <p>Price:${price}</p>
                    <p class=" tracking-wide">Date: {time} </p>
                    <p class=" tracking-wide">Rating: {rating}</p>
                </div>

            </a>

        </div>
    );
};

export default DetailsPart;