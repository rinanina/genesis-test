import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => (
    <div className='error'>
        <h3 className="error__title">{error}</h3>
        <h3 className="error__message">Cant get articles</h3>
    </div>
);

Error.propTypes = {
    error: PropTypes.string.isRequired
};

export default Error;