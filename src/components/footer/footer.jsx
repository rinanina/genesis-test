import React  from 'react';
import PropTypes from 'prop-types';

const Footer = ({ date }) => (
    <footer className='footer'>
        <div className='footer__date'>{date}</div>
    </footer>
);

Footer.propTypes = {
    date: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]).isRequired
};

export default Footer;