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
import Blog from '../../components/BlogPage/Blog';


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
            {
                path: '/services',
                // loader: () => fetch('https://kidspace-server-site.vercel.app/services'),
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
                path: '/reviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/service/:id',
                loader: ({ params }) => fetch(`https://kidspace-server-site.vercel.app/services/${params.id}`),
                element: <DetailsPage></DetailsPage>
            },

        ]
    }
]);
