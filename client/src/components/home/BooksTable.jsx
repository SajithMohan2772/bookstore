import { Link } from "react-router-dom"
import PropTypes from "prop-types";
const BooksTable = ({ books }) => {
return (
    <table className="w-full border-separate border-spacing-2">
                <thead>
                    <tr>
                        <th className="border border-slate-600 rounded-md">No</th>
                        <th className="border border-slate-600 rounded-md">Title</th>
                        <th className="border border-slate-600 rounded-md max-md:hidden">Author</th>
                        <th className="border border-slate-600 rounded-md max-md:hidden">publishYear</th>
                        <th className="border border-slate-600 rounded-md max-md:hidden">Operations</th>
                    </tr>
                </thead>
                <tbody>
                {books.map((book, index) => (
                    <tr key={book._id} className="h-8">
                            <td className="border border-slate-700 rounded-md text-center">
                            {index + 1}
                            </td>
                            <td className="border border-slate-700 rounded-md text-center">
                            {book.title}
                            </td>
                            <td className="border border-slate-700 rounded-md text-center">
                            {book.author}
                            </td>
                            <td className="border border-slate-700 rounded-md text-center">
                            {book.publishYear}
                            </td>
                            <td className="border border-slate-700 rounded-md text-center">
                                <div className="flex justify-center gap-x-4">
                                <Link to={`/books/details/${book._id}`}>
                                {/* <FaInfo className='text-2x1 text-green-800'/>  */}
                                <p className='text-2x1 text-blue-800'>INFO</p>
                                </Link>
                                <Link to={`/books/edit/${book._id}`}>
                                {/* <CiEdit className='text-2x1 text-yellow-600'/>  */}
                                <p className='text-2x1 text-yellow-600'>EDIT</p>
                                </Link>
                                <Link to={`/books/delete/${book._id}`}>
                                {/* <MdDeleteForever className='text-2x1 text-red-600'/>  */}
                                <p className='text-2x1 text-red-600'>DELETE</p>
                                </Link>
                                </div>
                            </td>
                        </tr>
                ))}
                </tbody>
            </table>
  )
}

// PropTypes validation outside the component definition
BooksTable.propTypes = {
books: PropTypes.arrayOf(
    PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        publishYear: PropTypes.number.isRequired,
        createdAt: PropTypes.string.isRequired,
        // Add other properties with their respective PropTypes
    })
).isRequired,
};

export default BooksTable
