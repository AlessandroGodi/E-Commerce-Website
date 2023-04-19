import React from 'react';
import AboutUs from '../Assets/About_us.jpg'

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about__row">
                    <figure className="about__img--wrapper">
                        <img src={AboutUs} alt="" className='about__img' />
                    </figure>
                    <div className="about__description">
                        <h2 className="about__description--title">
                            Our Story!
                        </h2>
                    </div>
                </div>
                <p className="about__para">
                    We here at Dream Plate PTY are here to bring you dreams into reality without the hassle and stress it causes you. Our us of AI will allow the dream to become rendered into reality from your details of the dream.
                </p>
                <p className="about__para">
                    Get in contact with us if you have any questions or want to just chat about the artwork.
                </p>
            </div>
        </section>
    );
}

export default About;
