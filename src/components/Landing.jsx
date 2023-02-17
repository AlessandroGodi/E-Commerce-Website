import React from 'react';
import UndrawBooks from '../assets/Undraw_Books.svg'

const Landing = () => {
    return (
        <div>
            <section id="landing">
                <div className="header__container">
                    <div className="header__description">
                        <h1>Australia's most awarded online library platform</h1>
                        <h2>Find your dream book with <span className="purple">Library</span></h2>
                        <a href="#features">
                            <button className="btn">Browse Books</button>
                        </a>                 
                    </div>
                    <figure className='header--img--wraper'>
                        <img src={UndrawBooks} alt="" />
                    </figure>
                </div>
            </section>
        </div>
    );
}

export default Landing;
