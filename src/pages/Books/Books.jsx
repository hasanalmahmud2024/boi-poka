import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {

    // useEffect(() => {
    //     fetch('booksData.json').then(res => res.json())
    //         .then(data => setBooks(data));
    // }, [])

    // const booksPromise = fetch('/booksData.json').then(res=>res.json());



    return (
        <div className=''>
            <h1 className='text-4xl text-center p-6 font-bold '>Books</h1>
            <Suspense fallback={<span>Loading ......</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-stretch my-2' >
                    {
                        data.map((singleBook, index)=> <Book key={index} singleBook={singleBook}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;