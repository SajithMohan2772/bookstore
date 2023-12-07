import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import BookModel from "./BookModel";

const BookSingleCard = ({ book }) => {
    const [showModel, setShowModel] = useState(false);
return (
    <div
    className='border-2 border-grey-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'
    >
        <h2 className='w-fit px-4 bg-red-300 rounded-lg'>
        {book.publishYear}
    </h2>
    <h4  className='my-2 text-gray-500 '>{book._id}</h4>
    <div className='flex justify-start items-center gap-x-2'>
          {/* <PiBookOpenTextLight className="text-red-300 text-2xl"/> */}
        <h2 className='my-1'>{book.title}</h2>
    </div>
    <div className='flex justify-start items-center gap-x-2'>
          {/* <PiBookOpenTextLight className="text-red-300 text-2xl"/> */}
        <h2 className='my-1'>{book.author}</h2>
    </div>

<div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
<h3
        className='text-3xl text-blue-800 hover:text-black cursor-pointer'
        onClick={() => setShowModel(true)}
        >Bishow</h3>
        <Link to={`/books/details/${book._id}`}>
            <h2 className="text-2xl text-green-600 hover:text-black">Info</h2>
        </Link>
        <Link to={`/books/edit/${book._id}`}>
            <h2 className="text-2xl text-yellow-600 hover:text-black">Edit</h2>
        </Link>
        <Link to={`/books/delete/${book._id}`}>
            <h2 className="text-2xl text-red-600 hover:text-black">Delete</h2>
        </Link>
    </div>
    {
        showModel && (
            <BookModel book={book} onClose={() => setShowModel(false)} />  
        )
    }
</div>
)
}

// PropTypes validation outside the component definition
BookSingleCard.propTypes = {
    book: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            publishYear: PropTypes.number.isRequired,
            createdAt: PropTypes.string.isRequired,
            book: PropTypes.array.isRequired,
            // Add other properties with their respective PropTypes
        })
    ).isRequired,
    };

export default BookSingleCard
