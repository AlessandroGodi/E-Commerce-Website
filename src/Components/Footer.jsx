import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer__row">
                    <figure className='footer__icon'>
                        <Link to='/' className='footer__link--icon'>
                            <FontAwesomeIcon icon={'store'} />
                        </Link>
                    </figure>
                    <div className="footer__list">
                        <Link to='/' className='footer__link'>Home</Link>
                        <Link to='/art' className='footer__link'>Art</Link>
                        <Link to='/about' className='footer__link'>About</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
