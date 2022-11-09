import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LogIn from '../../components/Pages/AuthPages/Login/Login';
import Register from '../../components/Pages/AuthPages/Register/Register';


import Home from '../../components/Pages/Homepage/Home/Home';
import Services from '../../components/Pages/ServicesPage/Services/Services';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes'
import Main from "../../layout/Main/Main";
import ErrorPage from '../../Shared/ErrorPage/ErrorPage';
import Contact from '../../components/Pages/Contact/Contact';
import DetailsPage from '../../components/Pages/DetailsPage/DetailsPage';
import AddServices from '../../components/Pages/AddServicesPage/AddServices/AddServices';
import MyReviews from '../../components/Pages/MyReviewsPage/MyReviews/MyReviews';


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            // {
            //     path: '/home',
            //     loader: () => fetch('https://study-zone-server-site.vercel.app/courses'),
            //     element: <Home></Home>
            // },
            {
                path: '/services',
                // loader: () => fetch('http://localhost:5000/services'),
                element: <Services></Services>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addServices',
                element: <PrivateRoutes><AddServices></AddServices></PrivateRoutes>
            },
            {
                path: '/myReviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            // {
            //     path: '/about',
            //     element: <About></About>
            // },
            // {
            //     path: '/faq',
            //     element: <FAQ></FAQ>
            // },
            // {
            //     path: '/blog',
            //     element: <Blog></Blog>
            // },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/service/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <DetailsPage></DetailsPage>
            },
            // {
            //     path: '/items/:course_id',
            //     loader: ({ params }) => fetch(`https://study-zone-server-site.vercel.app/items/${params.course_id}`),
            //     element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,

            // }
        ]
    }
]);
