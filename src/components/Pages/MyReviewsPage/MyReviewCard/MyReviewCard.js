import React, { useState } from 'react';
import useTitle from '../../../../UseTItle/UseTitle';
import UpdateModal from '../UpdateModal/UpdateModal';

const MyReviewCard = ({ review, handleToDelete }) => {
    useTitle('MyReview');
    const [currentReview, setCurrentReview] = useState(review);

    // const [review1, setReview1] = useState({})
    const { serviceName, customer, customerPhoto, email, message, rating, _id, currentDate, currentTime } = currentReview;
    console.log(review)

    return (
        <div className="w-2/3 py-12 mx-auto ">
            <article className="rounded-l-3xl md:flex bg-gradient-to-t from-red-300 via-orange-300 to-yellow-200 transition hover:shadow-xl">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                    <time
                        datetime={currentDate}
                        className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                    >
                        <span>{currentDate}</span>
                        <span className="w-px flex-1 bg-gray-900/10"></span>
                        <span>{currentTime}</span>
                    </time>
                </div>

                <div className=" py-6">
                    <img
                        alt="Guitar"
                        src={customerPhoto}
                        className="aspect-square h-36 w-36 object-cover  md:rounded-full"
                    />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                    <div className="border-l border-gray-900/10 p-2 sm:border-l-transparent sm:p-6">
                        <a href="#">
                            <div className="flex justify-between mb-2">
                                <h3 className="font-bold  text-gray-900">
                                    Service: {serviceName}
                                </h3>
                                <button className="btn-small font-semibold px-3 py-1 rounded-tl-xl rounded-br-xl bg-gradient-to-t from-lime-400 via-teal-300 to-emerald-600 text-black lg:mr-3"><a href={`#my-modal-${_id}`}>Update</a></button>
                            </div>

                            <div className="flex justify-between">
                                <h3 className="font-bold  text-gray-900">
                                    Customer: {customer}
                                </h3>
                                <button onClick={() => handleToDelete(_id)} className="btn-small font-semibold px-3 py-1 rounded-tl-xl rounded-br-xl bg-gradient-to-t from-red-500 via-orange-600 to-yellow-700 text-black lg:mr-3">Delete</button>
                            </div>
                        </a>

                        <p className="mt-2 text-sm mr-24 leading-relaxed text-gray-700 line-clamp-3">
                            {message}
                        </p>
                        <div className="flex justify-between mt-3">
                            <p className='font-semibold'>Email: {email}</p>
                            <p className="mr-5 font-semibold ">Rating:{rating}</p>
                        </div>

                        <div className="modal" id={`my-modal-${_id}`}>
                            <div className="modal-box">
                                <UpdateModal review={review} setCurrentReview={setCurrentReview}></UpdateModal>


                            </div>
                        </div>

                    </div>
                </div>
            </article>

        </div>
    );
};

export default MyReviewCard;