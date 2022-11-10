import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../../UseTItle/UseTitle';

const CheckOutForm = ({ service }) => {
    useTitle('CheckOut')
    const { user } = useContext(AuthContext);
    const { serviceName, img, price, time, rating, _id } = service;
    const handleToCheckOut = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            serviceId: _id,
            serviceName,
            price,
            customer: name,
            email,
            phone,
            message,
            img,
            time,
            rating
        }
        if (phone.length < 11) {
            alert('Phone number Should be 11 digit or Longer than 11 digit');
            return;
        }

        fetch('https://kidspace-server-site.vercel.app/orders', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Your checkout completed successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err))

    }

    return (
        <div className="rounded-lg my-10 mx-5 lg:mx-0 bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 bg-gradient-to-t from-gray-700 via-slate-800 to-gray-700">
            <form onSubmit={handleToCheckOut} action="" className="space-y-4 font-semibold text-slate-900">
                <div>
                    <h1 className="text-3xl font-bold mb-3 text-center text-lime-400">Check Out Form</h1>
                    <h2 className="text-lg font-semibold text-slate-300">Service: <span className="text-orange-500">{serviceName}</span></h2>
                    <h2 className="text-lg font-semibold text-slate-300 mb-2">Service Price:<span className="text-amber-600">{price}</span> $</h2>
                    <label className="sr-only" for="name">Name</label>
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm "
                        placeholder="Name"
                        type="text"
                        name='name'
                        id="name"
                        required
                        defaultValue={user?.displayName}
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                    <div>
                        <label className="sr-only" for="email">Email</label>
                        <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Email address"
                            type="email"
                            name='email'
                            id="email"
                            defaultValue={user?.email}
                            readOnly
                            required
                        />
                    </div>

                    <div>
                        <label className="sr-only" for="phone">Phone</label>
                        <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Phone Number"
                            type="tel"
                            name='phone'
                            id="phone"
                            required
                        />
                    </div>
                </div>

                {/* <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    <div>
                        <input className="sr-only" id="option1" type="radio" tabindex="-1" />
                        <label
                            for="option1"
                            className="block w-full rounded-lg border border-gray-200 p-3"
                            tabindex="0"
                        >
                            <span className="text-sm font-medium"> Option 1 </span>
                        </label>
                    </div>

                    <div>
                        <input className="sr-only" id="option2" type="radio" tabindex="-1" />
                        <label
                            for="option2"
                            className="block w-full rounded-lg border border-gray-200 p-3"
                            tabindex="0"
                        >
                            <span className="text-sm font-medium"> Option 2 </span>
                        </label>
                    </div>

                    <div>
                        <input className="sr-only" id="option3" type="radio" tabindex="-1" />
                        <label
                            for="option3"
                            className="block w-full rounded-lg border border-gray-200 p-3"
                            tabindex="0"
                        >
                            <span className="text-sm font-medium"> Option 3 </span>
                        </label>
                    </div>
                </div> */}

                <div>
                    <label className="sr-only " for="message">Message</label>
                    <textarea
                        className="w-full rounded-lg border-gray-200 p-3 text-sm "
                        placeholder="Message"
                        rows="8"
                        name='message'
                        id="message"
                    ></textarea>
                </div>

                <div className="mt-4">
                    <button
                        type="submit"
                        className="inline-flex  items-center justify-center w-full bg-black px-5 py-3 text-black sm:w-auto rounded-tl-xl rounded-br-xl bg-gradient-to-t from-lime-400 via-teal-300 to-emerald-600"
                    >
                        <span className="font-medium "> Process To payment </span>

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
    );
};

export default CheckOutForm;