import PropTypes from "prop-types";

const BookModel = ({book, onClose}) => {
return (
    <div 
        className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
        onClick={onclose}
    >
    <div 
        onClick={(event) => event.stopPropagation()}
        className="w-{600px} max-w-full h-{400px} bg-white rounded-xl p-4 flex flex-col relative"
    >
        <h3 
        className="absolute right-6 top-6 text-3xl text-red-600 crusor-pointer"
        onClick={onClose}
        >Close</h3>

        <h2 className='w-fit px-4 bg-red-300 rounded-lg'>
        {book.publishYear}
    </h2>
    <h4  className='my-2 text-gray-500 '>{book.author}</h4>
    <div className='flex justify-start items-center gap-x-2'>
          {/* <PiBookOpenTextLight className="text-red-300 text-2xl"/> */}
        <h2 className='my-1'>{book.title}</h2>
    </div>
    <div className='flex justify-start items-center gap-x-2'>
          {/* <PiBookOpenTextLight className="text-red-300 text-2xl"/> */}
        <h2 className='my-1'>{book.author}</h2>
    </div>
    <p className='mt-4'>Anything You want to show</p>
        <p className='my-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
        voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
        necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
        nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
        dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
        vitae voluptate sequi repellat!
        </p>
    </div>
    </div>
);
};

BookModel.propTypes = {
    book: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            publishYear: PropTypes.number.isRequired,
            createdAt: PropTypes.string.isRequired,
            onClose: PropTypes.func.isRequired,
            // Add other properties with their respective PropTypes
        })
    ).isRequired,
    };

export default BookModel
