import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const CheckOutForm = ({ service }) => {
    const { user } = useContext(AuthContext);
    const { serviceName, img, price, time, rating } = service;
    return (
        <div class="rounded-lg my-10 mx-5 lg:mx-0 bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 bg-gradient-to-t from-gray-700 via-slate-800 to-gray-700">
            <form action="" class="space-y-4 font-semibold text-slate-900">
                <div>
                    <h1 className="text-3xl font-bold mb-3 text-center text-lime-400">Check Out Form</h1>
                    <h2 className="text-lg font-semibold text-slate-300">Service: <span className="text-orange-500">{serviceName}</span></h2>
                    <h2 className="text-lg font-semibold text-slate-300 mb-2">Service Price:<span className="text-amber-600">{price}</span> $</h2>
                    <label class="sr-only" for="name">Name</label>
                    <input
                        class="w-full rounded-lg border-gray-200 p-3 text-sm "
                        placeholder="Name"
                        type="text"
                        name='name'
                        id="name"
                        defaultValue={user?.displayName}
                    />
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
                    <div>
                        <label class="sr-only" for="email">Email</label>
                        <input
                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Email address"
                            type="email"
                            name='email'
                            id="email"
                            defaultValue={user?.email}
                            readOnly
                        />
                    </div>

                    <div>
                        <label class="sr-only" for="phone">Phone</label>
                        <input
                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Phone Number"
                            type="tel"
                            name='phone'
                            id="phone"
                        />
                    </div>
                </div>

                {/* <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    <div>
                        <input class="sr-only" id="option1" type="radio" tabindex="-1" />
                        <label
                            for="option1"
                            class="block w-full rounded-lg border border-gray-200 p-3"
                            tabindex="0"
                        >
                            <span class="text-sm font-medium"> Option 1 </span>
                        </label>
                    </div>

                    <div>
                        <input class="sr-only" id="option2" type="radio" tabindex="-1" />
                        <label
                            for="option2"
                            class="block w-full rounded-lg border border-gray-200 p-3"
                            tabindex="0"
                        >
                            <span class="text-sm font-medium"> Option 2 </span>
                        </label>
                    </div>

                    <div>
                        <input class="sr-only" id="option3" type="radio" tabindex="-1" />
                        <label
                            for="option3"
                            class="block w-full rounded-lg border border-gray-200 p-3"
                            tabindex="0"
                        >
                            <span class="text-sm font-medium"> Option 3 </span>
                        </label>
                    </div>
                </div> */}

                <div>
                    <label class="sr-only " for="message">Message</label>
                    <textarea
                        class="w-full rounded-lg border-gray-200 p-3 text-sm "
                        placeholder="Message"
                        rows="8"
                        name='message'
                        id="message"
                    ></textarea>
                </div>

                <div class="mt-4">
                    <button
                        type="submit"
                        class="inline-flex  items-center justify-center w-full bg-black px-5 py-3 text-black sm:w-auto rounded-tl-xl rounded-br-xl bg-gradient-to-t from-lime-400 via-teal-300 to-emerald-600"
                    >
                        <span class="font-medium "> Process To payment </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ml-3 h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
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