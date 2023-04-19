import React from 'react';
import RedSun from '../Assets/AI Artwork/red_sun.png'
import SandyMoon from '../Assets/AI Artwork/Sandy_Moon.png'

const Landing = () => {
    return (
        <div>
            <section id="landing" >
                <div className="header__container">
                    <div className="header__description">
                        <h1 className='header__title' >
                            Bringing <span className='yellow-text'>Dreams</span> to <span className="yellow-text">Reality</span>
                        </h1>
                        <h2 className='header__subtitle' >
                            Your <span className="subtitle">DREAMS</span>, your <span className="subtitle">REALITY</span>
                        </h2>
                        <a href="/" className='header__btn' >
                            <button className='btn'>
                                Dream Now
                            </button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={RedSun} alt="" className='header__img header__img--1' />
                        <img src={SandyMoon} alt="" className='header__img header__img--2' />
                    </figure>
                </div>
            </section>
        </div>
    );
}

export default Landing;
