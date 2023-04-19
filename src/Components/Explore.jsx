import React from 'react';

const Explore = () => {

    return (
        <div>
            <section id="explore">
                <div className="explore__container">
                    <div className="selling__wrap">
                        <div className="selling__plan">
                            <h2 className="plan__price">
                                $14.95
                            </h2>
                            <h1 className="plan__title">
                                Daydream
                            </h1>
                            <p className="plan__description">
                                lowest resolution plan, fast delivery
                            </p>
                        </div>
                        <div className="selling__plan">
                            <h2 className="plan__price">
                                $24.95
                            </h2>
                            <h1 className="plan__title">
                                Nightmare
                            </h1>
                            <p className="plan__description">
                                medium tier plan, higher resolution
                            </p>
                        </div>
                        <div className="selling__plan">
                            <h2 className="plan__price">
                                $34.95
                            </h2>
                            <h1 className="plan__title">
                                Lucid
                            </h1>
                            <p className="plan__description">
                                highest tier of dreamers, fastest delivery and resolution
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Explore;
