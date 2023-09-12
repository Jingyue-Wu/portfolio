import PropTypes from 'prop-types';

export default function Image({ image }) {

    return (
        <>
            <img className='w-80 mt-3 align-middle' loading="eager" src={image} alt="" />
        </>
    );
}

Image.propTypes = {
    image: PropTypes.string.isRequired,
};