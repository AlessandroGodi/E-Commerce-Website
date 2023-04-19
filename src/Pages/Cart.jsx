import React from 'react';
import { Link } from 'react-router-dom';
import EmptyCart from '../Assets/emptyCart.png'

const Cart = () => {
    return (
        <section id="cart">
            <div className="cart__container">
                <div className="cart__row">
                    <h2 className="cart__title">
                        Cart
                    </h2>
                    <div className="cart">
                        <div className="cart__header">
                            <span className="cart__art">
                                Artwork
                            </span>
                            <span className="cart__quantity">
                                Quantity
                            </span>
                            <span className="cart__total">
                                Price
                            </span>
                        </div>
                        <figure className="cart__img--wrapper">
                            <img src={EmptyCart} alt="" className="cart__img" />
                        </figure>
                        <Link to='/' className='cart__link' >
                            <button className="cart__btn">
                                Proceed to Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;
