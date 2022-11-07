import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import img_logo from '../../../../assets/img/logo.jpg';
import img from '../../../../assets/img/logIn.png'

const Register = () => {
    return (
        <div className="bg-white dark:bg-gray-900 pb-24 pt-10  bg-gradient-to-t from-black via-slate-800 to-gray-900">
            <div className="flex justify-center h-screen bg-gradient-to-t from-black via-slate-800 to-gray-900">
                <section className="bg-white dark:bg-gray-900 lg:w-1/2 mx-auto">
                    <div className="container flex items-center justify-center min-h-screen px-6 mx-auto bg-gradient-to-t from-black via-slate-800 to-gray-900">
                        <div className="w-full max-w-md rounded-xl p-4 bg-gradient-to-t from-black via-slate-800 to-gray-900">
                            <img className="object-cover w-24 h-24 mx-auto rounded-full" src={img_logo} />

                            <div className="flex items-center justify-center mt-6">
                                <a href="#" className="w-1/3 pb-4 font-medium text-center text-yellow-100 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                                    sign up
                                </a>
                            </div>
                            <form>
                                <div className="relative flex items-center mt-4">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>

                                    <input type="text" name='name' className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
                                </div>

                                <div className="relative flex items-center mt-4">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-2 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                        </svg>
                                    </span>

                                    <input type="text" name='photoURL' className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Photo URL" />
                                </div>

                                <div className="relative flex items-center mt-4">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </span>

                                    <input type="email" name='email' className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                                </div>

                                <div className="relative flex items-center mt-4">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </span>

                                    <input type="password" name='password' className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                                </div>

                                <div className="relative flex items-center mt-4">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </span>

                                    <input type="password" name='conPassword' className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Confirm Password" />
                                </div>
                                <p className="text-orange-900 font-bold"></p>
                                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check
                                        type="checkbox"
                                        onClick={handleToCheck}
                                        label={<>Accept <Link to='/register'>term and conditions</Link> </>} />
                                </Form.Group> */}
                                <button type='submit' className="w-full mt-5 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Sign Up
                                </button>
                            </form>
                            <div className="mt-6 text-slate-300">
                                <div className="flex justify-center space-x-4 mt-4">
                                    <button aria-label="Log in with Google" className="p-3 rounded-sm">
                                        <FaGoogle></FaGoogle>
                                    </button>
                                    <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                                        <FaFacebookF></FaFacebookF>
                                    </button>
                                    <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                                        <FaGithub></FaGithub>
                                    </button>
                                </div>
                                <div className="mt-6 text-center ">
                                    <Link to='/login' className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                        Already have an account?
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="hidden bg-cover lg:block lg:w-1/2 mr-10 rounded-lg" style={{ backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat" }}>
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div className='text-start'>
                            <h2 className="text-4xl font-bold text-white">Terms And Conditions</h2>

                            <p className="max-w-xl mt-3 text-start text-lg text-gray-300">
                                * You have to provide your real Name.<br />
                                * You have to legal citizen. <br />
                                * You have to show respect to your Tutor.<br />
                                * Don't have the permission to copyright.<br />
                                * Set the repercussions of violating the terms and conditions.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;