import React from 'react';

const Blog = () => {
    return (
        <div className="bg-gradient-to-t from-black via-slate-800 to-gray-900">
            <section className="dark:dark:bg-gray-800 text-slate-300 dark:dark:text-gray-100 ">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl text-center font-semibold sm:text-4xl">Try to familiar with some Topics</h2>
                    <p className="mt-4 mb-12 text-center dark:dark:text-gray-400 text-lg font-semibold mx-[10%]">We all want to expand on our existing knowledge. But sometimes it's impossible to stay consistent with a new skill or habit. It's easy to fall into the trap where you focus only on learning and never get around to implementing the information.</p>
                    <div className="space-y-4 sm:mx-5">
                        <details className="w-full border rounded-lg bg-slate-700" open="">
                            <summary className="text-lg font-semibold px-4 py-6 focus:outline-none font focus-visible:ring-violet-400"><span className="font-bold text-orange-400">Question: </span> Difference between SQL and NoSQL</summary>
                            <p className="text-start text-base font-semibold px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400"><span className="font-bold text-lg">SQL:</span><br />
                                <br />1. RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).<br /><br /> 2. These databases have fixed or static or predefined schema. <br /><br /> 3. These databases are not suited for hierarchical data storage. <br /><br />3. Javascript is capable enough to add HTML and play with the DOM. <br /><br />4. These databases are best suited for complex queries. <br /><br />5. Vertically Scalable.
                                <br /><br /><br />
                                <span className="font-bold text-lg">NoSQL :</span><br />
                                <br />1. Non-relational or distributed database system.<br /><br /> 2. They have dynamic schema <br /><br /> 3. It is mostly used on the server-side.. <br /><br />3. These databases are best suited for hierarchical data storage.<br /><br />4. These databases are not so good for complex queries. <br /><br />5. Horizontally scalable.   </p>
                        </details>
                        <details className="w-full border rounded-lg bg-slate-700" open="">
                            <summary className=" text-lg font-semibold px-4 py-6 focus:outline-none focus-visible:ring-violet-400"><span className="font-bold text-orange-400">Question: </span>What is JWT, and how does it work?</summary>
                            <p className="text-start text-base font-semibold px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400"><span className="font-bold text-lg">JWT:</span><br />JWT is used to securely transfer information between two bodies.(like servers) and for the purpose of Authorization. It is digitally signed so there is no chance of alteration.<br /><br /> JWT is very easy to transfer in HTTP requests in GET we can send it in URL, in POST we can send it in Authorization Header. <br /> <br />JWT token itself contains the user information, so there is no need to query the DB for info. <span className="font-bold text-lg">How Do JWT Works::</span><br />1. From the Browser we send the login request to server, server verifies the request and generates a secret and sends it back to the browser. <br /> <br />
                                2. Then on each subsequent request, we will Pass JWT in Headers. <br /> <br />
                                3. If the JWT signature matches with our DB info(from JWT data try to get user info) then send a successful response to the browser.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg bg-slate-700" open="">
                            <summary className="text-lg font-semibold px-4 py-6 focus:outline-none focus-visible:ring-violet-400"><span className="font-bold text-orange-400">Question: </span> What is the difference between javascript and NodeJS?</summary>
                            <p className="text-start text-base font-semibold px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400"><span className="font-bold text-lg">JavaScript:</span><br />
                                <br />1. Javascript is a programming language that is used for writing scripts on the website.<br /><br /> 2. Javascript is a programming language that is used for writing scripts on the website. <br /><br /> 3. It is basically used on the client-side. <br /><br />3. Javascript is capable enough to add HTML and play with the DOM. <br /><br />4. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. <br /><br />5. Javascript is a programming language that is used for writing scripts on the website.
                                <br /><br /><br />
                                <span className="font-bold text-lg">NodeJS :</span><br />
                                <br />1. NodeJS is a Javascript runtime environment..<br /><br /> 2. We can run Javascript outside the browser with the help of NodeJS.. <br /><br /> 3. It is mostly used on the server-side.. <br /><br />3. Javascript is capable enough to add HTML and play with the DOM. <br /><br />4. Nodejs does not have capability to add HTML tags. <br /><br />5. V8 is the Javascript engine inside of node.js that parses and runs Javascript.   </p>
                        </details>
                        <details className="w-full border rounded-lg bg-slate-700" open="">
                            <summary className="text-lg font-semibold px-4 py-6 focus:outline-none focus-visible:ring-violet-400"><span className="font-bold text-orange-400">Question: </span>How does NodeJS handle multiple requests at the same time?</summary>
                            <p className="text-start text-base font-semibold px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. <br></br> <br></br>
                                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.  </p>
                        </details>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Blog;