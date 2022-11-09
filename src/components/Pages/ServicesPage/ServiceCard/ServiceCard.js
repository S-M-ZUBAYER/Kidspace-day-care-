import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { serviceName, _id, img, time, price, description, facility, rating } = service;
    // const handlePhotoView = (photo) => {
    //     { console.log(photo) }
    //     < PhotoProvider >
    //         <PhotoView src={photo}>
    //             <img src={photo} alt="" />
    //         </PhotoView>
    //     </PhotoProvider >
    // }
    return (
        <div>
            <div className="max-w-lg p-4 shadow-md rounded-tl-2xl rounded-br-2xl  dark:dark:bg-gray-900 dark:dark:text-gray-100 bg-gradient-to-t from-black via-slate-800 to-gray-600 text-slate-400">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:dark:text-gray-100">Time:{time}</a>
                    </div>
                    <a rel="noopener noreferrer" href="#">Rating: {rating}</a>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img src={img} alt="img" className="block object-cover object-center w-full rounded-md h-72 dark:dark:bg-gray-500" />

                            </PhotoView>
                        </PhotoProvider>
                        <div className="flex items-center text-xs">
                            <p>Price: {price}</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:dark:text-violet-400">{serviceName}</h3>
                        </a>
                        <p className="leading-snug dark:dark:text-gray-400">{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                        <Link to={`/service/${_id}`}>
                            <button className="mt-5 bg-gradient-to-t from-red-400 via-orange-400 to-lime-400 w-full py-2 rounded-tl-xl rounded-br-xl text-lg font-bold text-black">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;