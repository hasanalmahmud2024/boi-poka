import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa"
import { Link } from 'react-router';


const Book = ({ singleBook }) => {
    // const data = use(booksPromise);
    console.log(singleBook);

    const { bookId, bookName, image, rating, category, tags, yearOfPublishing, publisher } = singleBook;

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 shadow-sm h-full border p-5">
                <figure className='p-4 bg-gray-300 w-full mx-auto rounded-2xl'>
                    <img
                        className='h-[166px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-5'>
                        {
                            tags.map((tag, index) => <button key={index}>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>Book by : {publisher}</p>
                    <div className="border-dashed border"></div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating}<FaStarHalfAlt></FaStarHalfAlt></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;