import React from 'react';

const Featured = () => {
    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                        <div className="book">
                            <a href="/">
                                <figure>
                                    <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" />
                                </figure>
                            </a>
                            <div className="book__title">
                                <a href="/" className='book__title--link'>
                                    Atomic Habits
                                </a>
                            </div>
                            <div className="book__ratings">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;
