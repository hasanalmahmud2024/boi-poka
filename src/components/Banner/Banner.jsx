import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-100 min-h-screen pt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bookImage}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className='text-center md:text-left'>
                    <h1 className="text-5xl font-bold py-5 mb-2">Books to freshen up your bookshelf</h1>
                    <button className="btn btn-primary">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;