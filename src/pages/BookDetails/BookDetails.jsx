import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const { id } = useParams()
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === parseInt(id));
    // console.log(singleBook);
    const { bookName, author, image, rating, category, tags, yearOfPublishing, publisher, review, totalPages } = singleBook;

    const handleMarkAsRead = (id) => {
        // store with id
        // where to store
        // array of collection
        // alert if already exist
        // if not exist then push in the array
        MySwal.fire({
            title: "Good job!",
            text: "You read the book",
            icon: "success"
        });

        addToStoredDB(id)
    }

    const handleAddToList = (id) =>{
        toast("added to wishlist!");
    }

    return (
        <div className='mx-auto'>
            <div className='flex flex-col md:flex-row gap-5 p-10'>
                <figure className='p-10 bg-gray-400 rounded-sm md:w-1/3 place-items-center'>
                    <img
                        className=''
                        src={image}
                        alt={bookName} />
                </figure>
                <div className='md:card-body md:w-2/3'>
                    <h2 className="card-title text-2xl p-1 ">{bookName}</h2>
                    <p className='p-1 mb-2'>By : {author}</p>
                    <p className='border-y pl-1 py-2 my-1'>{category}</p>
                    <p className='p-1 mb-2'>Review: {review}</p>
                    <div className=' space-x-2 p-1 mb-2'>
                        <span>Tags: </span>
                        {
                            tags.map((tag, index) => <div key={index} className="badge badge-soft badge-success">{tag}</div>)
                        }
                    </div>
                    <div className='p-1 mb-2 space-y-2'>
                        <p>Number of Pages : {totalPages}</p>
                        <p>Publisher : {publisher}</p>
                        <p>Year of Publishing : {yearOfPublishing}</p>
                        <p>Rating : {rating}</p>
                    </div>
                    <div className='grid grid-cols-2 gap-7 p-1 mb-2'>
                        <button onClick={() => handleMarkAsRead(id)} className="btn ">Mark as Read</button>
                        <button onClick={() => handleAddToList(id)} className="btn bg-sky-500">Add to Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;