import  { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

const BackButton = ({ destination = '/' }) => {
    return (
    <div className='flex'>
        <Link 
            to={destination}
            className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'
            >
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
        </Link>
    </div>
    )
}

BackButton.propTypes = {
    destination: PropTypes.string,
};

export default BackButton
