import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../3Star';
import FourStars from '../4Star';
import FiveStars from '../5Star';

const AngelicoGuitar = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">D'Angelico Premier Series EXL-1</h1>
            <div className="product-row">
                <div className="review-row">
                    <p className="product-row"><ThreeStars />(10 Reviews)</p>
                </div>
            </div>
            <div className="product-row">
                <img src={process.env.PUBLIC_URL + '/Guitars-images/DAngelico Premier Series EXL1 Hollowbody Electric Guitar with Stairstep Tailpiece Transparent Wine.jpg'} alt="guitar" className="product-img-page" />
                <div className="product-column">
                    <h2 className="product-price text-center">$749.99</h2>
                    <div className="stock-options-row">
                        <p className="ready-to-ship"> <i class="fa fa-check-square ready-to-ship" aria-hidden="true" />In Stock &amp; Ready to Ship</p>
                    </div>
                    <p className="order-msg">Most orders placed before noon ET ship same day (except weekends and holidays).</p>
                    <div className="product-row">
                        <input type="number" placeholder="1" min="1" max="100" className="cart-input" />
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                    <div className="product-icon-col">
                        <p className="product-icon-text"><i class="fa product-icons fa-truck" aria-hidden="true"></i>Fast Shipping</p>
                        <p className="product-icon-text"> <i class="fa product-icons fa-credit-card" aria-hidden="true"></i>Flexible payment options</p>
                        <p className="product-icon-text"><i class="fa product-icons fa-usd" aria-hidden="true"></i>Lowest price</p>
                    </div>
                </div>
            </div>
            <h2 className="text-center sub-page-heading">People Who Viewed This Item Also Viewed</h2>
            <div className="product-div">

                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$774.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Guitars-images/Fender Player Stratocaster Maple Fingerboard Limited Edition Electric Guitar Shell Pink.jpg'} alt="guitar" className="img-thumbnail" />
                                <p className="card-title">Fender Player Stratocaster Limited Edition</p>
                                <FourStars />
                                <Link>
                                    <p className="review-text text-center">(4 Reviews)</p>
                                </Link>
                                <div class="col text-center">
                                    <Link className="btn product-description btn-link">Details</Link>
                                </div>
                                <div class="col text-center">
                                    <button className="btn btn-primary">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$499.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Guitars-images/Guild OM-240CE Orchestra Acoustic-Electric Guitar Charcoal Burst.jpg'} alt="guitar" className="img-thumbnail" />
                                <p className="card-title">Guild OM-240CE Orchestra Acoustic-Electric</p>
                                <FiveStars />
                                <Link>
                                    <p className="review-text text-center">(7 Reviews)</p>
                                </Link>
                                <div class="col text-center">
                                    <Link className="btn product-description btn-link">Details</Link>
                                </div>
                                <div class="col text-center">
                                    <button className="btn btn-primary">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$499.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Guitars-images/G&L Limited Edition Tribute ASAT Classic Ash Body Electric Guitar Gloss Natural.jpg'} alt="guitar" className="img-thumbnail" />
                                <p className="card-title">G&amp;L Limited Edition Tribute ASAT Classic</p>
                                <FourStars />
                                <Link>
                                    <p className="review-text text-center">(7 Reviews)</p>
                                </Link>
                                <div class="col text-center">
                                    <Link className="btn product-description btn-link">Details</Link>
                                </div>
                                <div class="col text-center">
                                    <button className="btn btn-primary">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$179.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Guitars-images/Squier Bullet Telecaster Limited Edition Electric Guitar Surf Green.jpg'} alt="guitar" className="img-thumbnail" />
                                <p className="card-title">Squier Bullet Telecaster Limited Edition</p>
                                <FourStars />
                                <Link>
                                    <p className="review-text text-center">(3 Reviews)</p>
                                </Link>
                                <div class="col text-center">
                                    <Link className="btn product-description btn-link">Details</Link>
                                </div>
                                <div class="col text-center">
                                    <button className="btn btn-primary">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default AngelicoGuitar;