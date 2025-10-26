import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';
import ReadList from '../pages/ReadList/ReadList';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
                loader: () => fetch('/booksData.json'),
            },
            {
                path: '/about',
                Component: About,

            },
            {
                path: 'readList',
                Component: ReadList,
                loader: () => fetch('/booksData.json'),
            },
            {
                path: '/bookDetails/:id',
                Component: BookDetails,
                loader: () => fetch('/booksData.json'),

            }
        ]
    },
]);
