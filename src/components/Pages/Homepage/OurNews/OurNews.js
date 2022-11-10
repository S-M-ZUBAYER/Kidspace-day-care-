import React from 'react';
import { Link } from 'react-router-dom';

const OurNews = () => {
    return (
        <div>
            <Link to='/services' className="bg-black">
                <button className="w-1/2 flex justify-center mx-auto bg-gradient-to-t from-red-400 via-orange-400 to-red-600  py-2 rounded-tl-xl rounded-br-xl text-lg font-bold text-black">See All Services</button>
            </Link>
            <div className="flex justify-center  p-4 bg-gradient-to-t from-black via-slate-800 to-black">
                <div className="flex flex-col justify-center items-center my-16">
                    <div className=" text-2xl md:text-5xl font-medium text-red-100 flex my-6">
                        <div>Update News About Our Daily By </div>
                        <div className="text-cyan-400 mx-1"> Activities</div>
                    </div>
                    <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">

                        <div className="overflow-hidden w-full m-4 flex justify-center   md:w-[33%]  shadow-xl bg-cyan-400">

                            <div className="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                                <div className="  items-center justify-center flex py-2">
                                    <div className="flex flex-col  items-center justify-center ">
                                        <div className="flex items-center">
                                            <div className="p-1 bg-white rounded-full">

                                                <img src="https://tse1.mm.bing.net/th?id=OIP.tygBKMEMnk7tWVCSLfbz-QHaFj&pid=Api&P=0" alt=""
                                                    className="rounded-full" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-stone-500 mx-4">Tour With Parents</div>
                                                <div className="text-sm font-medium text-stone-500 hover:text-stone-500 mx-4"><a
                                                    href="#">Place: Padma River</a></div>
                                            </div>
                                        </div>
                                        <div className="text-stone-400  m-2 px-8"> Its a nice place. we spend all day long there .we will inform you later</div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="overflow-hidden w-full m-4 flex justify-center   md:w-[33%]  shadow-xl bg-cyan-400">

                            <div className="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                                <div className="  items-center justify-center flex py-2">
                                    <div className="flex flex-col  items-center justify-center ">
                                        <div className="flex items-center">
                                            <div className="p-1 bg-white rounded-full">

                                                <img src="https://tse3.mm.bing.net/th?id=OIP.J2RorHvH5rXyRZpJkQSkeAHaEK&pid=Api&P=0" alt="" className="rounded-full" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-stone-500 mx-4">sports event</div>
                                                <div className="text-sm font-medium text-stone-500 hover:text-stone-500 mx-4"><a
                                                    href="#">play ground</a></div>
                                            </div>
                                        </div>
                                        <div className="text-stone-400  m-2 px-8">Its a nice place for events. we play with our child all day long there .we will inform you later</div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="overflow-hidden w-full m-4 flex justify-center   md:w-[33%]  shadow-xl bg-cyan-400">

                            <div className="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                                <div className="  items-center justify-center flex py-2">
                                    <div className="flex flex-col  items-center justify-center ">
                                        <div className="flex items-center">
                                            <div className="p-1 bg-white rounded-full">

                                                <img src="https://tse4.mm.bing.net/th?id=OIP.NgVrEdOgQ2J_M7ER-gldcgHaD7&pid=Api&P=0" alt="" className="rounded-full" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-stone-500 mx-4">Parents Meeting</div>
                                                <div className="text-sm font-medium text-stone-500 hover:text-stone-500 mx-4"><a
                                                    href="#">In Office</a></div>
                                            </div>
                                        </div>
                                        <div className="text-stone-400  m-2 px-8"> Its a nice place. we meet all parents all day long there .we will inform you later
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurNews;