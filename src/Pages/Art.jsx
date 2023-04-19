import React from 'react';
import River from '../Assets/AI Artwork/river.png'

const Art = () => {
    return (
        <section id="art">
            <div className="art__container">
                <div className="art__row">
                    <div className="artwork">
                        <figure className="art__img--wrapper">
                            <img src={River} alt="" className='art__img' />
                            <h2 className="art__price">
                                $99.99
                                {/* THis is bottom write of artwork */}
                            </h2>
                        </figure>
                        <h1 className="art__title">
                            Title of Art
                        </h1>
                        <h2 className="art__price--discount">
                            <span className='price--original'>$99.99</span> $49.99
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Art;
