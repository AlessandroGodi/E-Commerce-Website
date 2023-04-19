import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import myLogo from '../Assets/IMG_0426_Compressed.jpg'

const Nav = () => {
    return (
        <nav>
            <div className="nav__container">
                <Link to="/about" >
                    <img src={myLogo} alt="" className='logo' />
                </Link>
                <ul className="nav__links">
                    <li className="nav__list">
                        <Link to="/" className='nav__link' >
                            Home
                        </Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/art" className='nav__link' >
                            Artworks
                        </Link>
                    </li>
                    <li className="nav__icon">
                        <Link to="/cart" className='nav__link'>
                            <FontAwesomeIcon icon={'shopping-cart'}/>
                        </Link>
                        <span className="item__total">
                            1
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
