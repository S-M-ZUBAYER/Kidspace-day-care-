import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../../components/Pages/AuthPages/Login/Login';
import Register from '../../components/Pages/AuthPages/Login/Register/Register';
import Home from '../../components/Pages/Homepage/Home/Home';
import Main from "../../layout/Main/Main";
import ErrorPage from '../../Shared/ErrorPage/ErrorPage';


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
            // {
            //     path: '/home',
            //     loader: () => fetch('https://study-zone-server-site.vercel.app/courses'),
            //     element: <Home></Home>
            // },
            // {
            //     path: '/courses',
            //     loader: () => fetch('https://study-zone-server-site.vercel.app/courses'),
            //     element: <Courses></Courses>
            // },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
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
            // {
            //     path: '/contact',
            //     element: <Contact></Contact>
            // },
            // {
            //     path: '/courses/:id',
            //     loader: ({ params }) => fetch(`https://study-zone-server-site.vercel.app/courses/${params.id}`),
            //     element: <CourseDetails></CourseDetails>
            // },
            // {
            //     path: '/items/:course_id',
            //     loader: ({ params }) => fetch(`https://study-zone-server-site.vercel.app/items/${params.course_id}`),
            //     element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,

            // }
        ]
    }
]);
