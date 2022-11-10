import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import ReactDom from 'react-dom';

const UpdateModal = ({ review, setCurrentReview }) => {
    const { serviceName, customer, customerPhoto, rating, img, price, _id, message, phone, currentTime, currentDate } = review;
    const { user } = useContext(AuthContext);
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    // useEffect(() => {
    //     fetch(`http://localhost:5000/myReviews/${_id}`)
    // }, [])

    const handleToUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = user?.photoURL || 'Your Photo'
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;
        const rating = form.rating.value;
        const currentTime = form.time.value;
        const currentDate = form.date.value;


        const updatedReview = {
            serviceId: _id,
            serviceName,
            customer: name,
            customerPhoto: photo,
            email,
            phone,
            message,
            img,
            rating,
            currentDate,
            currentTime
        }
        console.log(updatedReview)
        // if (phone.length < 11) {
        //     alert('Phone number Should be 11 digit or Longer than 11 digit');
        //     return;
        // }


        fetch(`http://localhost:5000/myReviews/${review._id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Your Review successfully Updated');
                    setCurrentReview(updatedReview)
                    form.reset();
                }
            })
            .catch(err => console.error(err))

    }

    return (
        <div className="w-full flex justify-center py-24">

            <div className="rounded-lg w-3/4 mx-auto lg:mx-0 bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 bg-gradient-to-t from-gray-700 via-slate-800 to-gray-700">
                <form onSubmit={handleToUpdate} action="" className="space-y-4 font-semibold text-slate-900">
                    <div>
                        <h1 className="text-3xl font-bold mb-3 text-center text-lime-400">Update Review Form</h1>
                        <h2 className="text-lg font-semibold text-slate-300">Service: <span className="text-orange-500">{serviceName}</span></h2>
                        <h2 className="text-lg font-semibold text-slate-300 mb-2">Service Price:<span className="text-amber-600">{price}</span> $</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label className="sr-only" for="name">Your Name</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm "
                                placeholder="Name"
                                type="text"
                                name='name'
                                id="name"
                                required
                                defaultValue={user?.displayName}
                            />
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

                    </div>


                    <div>
                        <label className="sr-only" for="name">Your Photo</label>
                        <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm "
                            placeholder="Your Photo"
                            type="text"
                            name='photo'
                            id="photo"
                            required
                            defaultValue={user?.photoURL}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="sr-only" for="phone">Phone</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Phone Number"
                                type="tel"
                                name='phone'
                                id="phone"
                            />
                        </div>

                        <div>
                            <label className="sr-only" for="phone">Rating</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Rating"
                                type="text"
                                name='rating'
                                id="rating"
                                defaultValue={review?.rating}

                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="sr-only" for="phone">Date</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Current date"
                                type="tel"
                                name='date'
                                id="phone"
                                defaultValue={date}
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="sr-only" for="phone">Time</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Current Time"
                                type="tel"
                                name='time'
                                id="rating"
                                defaultValue={time}
                                readOnly

                            />
                        </div>
                    </div>


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

                    <div className="mt-4 w-full flex justify-center">
                        <button
                            type="submit"
                            className=" mr-2 btn-small font-semibold px-3 py-1 rounded-tl-xl rounded-br-xl  bg-gradient-to-t from-lime-400 via-teal-300 to-emerald-600"
                        >
                            Update Review
                        </button>
                        <div className="modal-action">
                            <a href="#" className="btn-small font-semibold px-3 py-1 rounded-tl-xl rounded-br-xl bg-gradient-to-t from-red-500 via-orange-600 to-yellow-700 text-black">Close</a>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    )
};

export default UpdateModal;