import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const AddServices = () => {
    const { user } = useContext(AuthContext);


    const handleToAddService = event => {
        event.preventDefault()
        const form = event.target;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const img = form.img.value;
        const time = form.time.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const service = {
            serviceName,
            img,
            rating,
            price,
            time,
            description
        }
        console.log(service)


        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Your service successfully added')
                    form.reset();
                }
            })
            .catch(err => console.error(err))

    }

    return (
        <div className="w-full flex justify-center py-24">

            <div className="rounded-lg w-3/4 mx-auto lg:mx-0 bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 bg-gradient-to-t from-gray-700 via-slate-800 to-gray-700">
                <form onSubmit={handleToAddService} action="" className="space-y-4 font-semibold text-slate-900">
                    <div>
                        <h1 className="text-3xl font-bold mb-3 text-center text-lime-400">Please Add Your Service</h1>
                        {/* <h2 className="text-lg font-semibold text-slate-300">Service: <span className="text-orange-500">{serviceName}</span></h2>
                        <h2 className="text-lg font-semibold text-slate-300 mb-2">Service Price:<span className="text-amber-600">{price}</span> $</h2> */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label className="sr-only" for="name">Service Name</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm "
                                placeholder="Service Name"
                                type="text"
                                name='serviceName'
                                id="name"
                                required
                            />
                            <label className="sr-only" for="email">Service Price</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Service Price"
                                type="text"
                                name='price'
                                id="price"
                                required
                            />

                        </div>

                    </div>


                    <div>
                        <label className="sr-only" for="name">service Photo</label>
                        <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm "
                            placeholder="Service Photo"
                            type="photo"
                            name='img'
                            id="photo"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="sr-only" for="phone">Time</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Time Duration "
                                type="text"
                                name='time'
                                id="time"
                                required
                            />
                        </div>

                        <div>
                            <label className="sr-only" for="phone">Rating</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Rating"
                                type="tel"
                                name='rating'
                                id="rating"

                            />
                        </div>
                    </div>



                    <div>
                        <label className="sr-only " for="message">description</label>
                        <textarea
                            className="w-full rounded-lg border-gray-200 p-3 text-sm "
                            placeholder="Description"
                            rows="8"
                            name='description'
                            id="message"
                        ></textarea>
                    </div>

                    <div className="mt-4 w-full flex justify-center">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center w-full bg-black px-20 py-3 text-black sm:w-auto rounded-tl-xl rounded-br-xl bg-gradient-to-t from-lime-400 via-teal-300 to-emerald-600"
                        >
                            <span className="font-medium "> Add Service </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-3 h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddServices;