import React from 'react';

const MyReviewCard = ({ review }) => {
    const { serviceName, customer, customerPhoto, email, message, rating } = review;
    return (
        <div className="w-2/3 py-12 mx-auto ">
            <article class="rounded-l-3xl md:flex bg-gradient-to-t from-red-300 via-orange-300 to-yellow-200 transition hover:shadow-xl">
                <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                    <time
                        datetime="2022-10-10"
                        class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                    >
                        <span>2022</span>
                        <span class="w-px flex-1 bg-gray-900/10"></span>
                        <span>Oct 10</span>
                    </time>
                </div>

                <div class=" py-6">
                    <img
                        alt="Guitar"
                        src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                        class="aspect-square h-36 w-36 object-cover  md:rounded-full"
                    />
                </div>

                <div class="flex flex-1 flex-col justify-between">
                    <div class="border-l border-gray-900/10 p-2 sm:border-l-transparent sm:p-6">
                        <a href="#">
                            <div className="flex justify-between mb-2">
                                <h3 class="font-bold  text-gray-900">
                                    Service: {serviceName}
                                </h3>
                                <button to='/login' className="btn-small font-semibold px-3 py-1 rounded-tl-xl rounded-br-xl bg-gradient-to-t from-lime-400 via-teal-300 to-emerald-600 text-black lg:mr-3">Update</button>
                            </div>

                            <div className="flex justify-between">
                                <h3 class="font-bold  text-gray-900">
                                    Customer: {customer}
                                </h3>
                                <button to='/login' className="btn-small font-semibold px-3 py-1 rounded-tl-xl rounded-br-xl bg-gradient-to-t from-red-500 via-orange-600 to-yellow-700 text-black lg:mr-3">Delete</button>
                            </div>
                        </a>

                        <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                            {message}
                        </p>
                        <div className="flex justify-between mt-3">
                            <p className='font-semibold'>Email: {email}</p>
                            <p className="mr-5 font-semibold ">Rating:{rating}</p>
                        </div>


                    </div>
                </div>
            </article>

        </div>
    );
};

export default MyReviewCard;