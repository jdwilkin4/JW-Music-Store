import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import FourStars from '../star-ratings/4Star';
import FiveStars from '../star-ratings/5Star';

const Guitars = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Guitars</h1>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$749.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Guitars-images/DAngelico Premier Series EXL1 Hollowbody Electric Guitar with Stairstep Tailpiece Transparent Wine.jpg'} alt="guitar" className="img-thumbnail" />
                                <p className="card-title">D'Angelico Premier Series EXL-1</p>
                                <ThreeStars />
                                <Link>
                                    <p className="review-text text-center">(10 Reviews)</p>
                                </Link>
                                <div class="col text-center">
                                    <Link className="btn product-description btn-link" to="/angelico">Details</Link>
                                </div>
                                <div class="col text-center">
                                    <button className="btn btn-primary">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$199.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Guitars-images/Fender FA135CE Concert Acoustic Electric Guitar Natural.jpg'} alt="guitar" className="img-thumbnail" />
                                <p className="card-title">Fender FA-135CE Concert Acoustic-Electric</p>
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
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$809.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Guitars-images/Fender Player Stratocaster HSS Plus Top Maple Fingerboard Limited-Edition Electric Guitar Blue Burst.jpg'} alt="guitar" className="img-thumbnail" />
                                <p className="card-title">Fender Player Stratocaster HSS Plus</p>
                                <FiveStars />
                                <Link>
                                    <p className="review-text text-center">(9 Reviews)</p>
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
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$749.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Guitars-images/Fender Player Telecaster Maple Fingerboard Electric Guitar Capri Orange.jpg'} alt="guitar" className="img-thumbnail" />
                                <p className="card-title">Fender Player Telecaster Capri Orange</p>
                                <FourStars />
                                <Link>
                                    <p className="review-text text-center">(6 Reviews)</p>
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
                            <h2 className="card-header text-center">$99.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Guitars-images/Rogue RD80 Dreadnought Acoustic Guitar Black.jpg'} alt="guitar" className="img-thumbnail" />
                                <p className="card-title">Rogue RD80 Dreadnought Acoustic</p>
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
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$179.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Guitars-images/Rogue Rocketeer Electric Guitar Pack Red Burst.jpg'} alt="guitar" className="img-thumbnail" />
                                <p className="card-title">Rogue Rocketeer Electric Guitar Pack Black</p>
                                <ThreeStars />
                                <Link>
                                    <p className="review-text text-center">(5 Reviews)</p>
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
                            <h2 className="card-header text-center">$249.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Guitars-images/Squier Affinity Telecaster HH Electric Guitar with Matching Headstock Metallic Orange.jpg'} alt="guitar" className="img-thumbnail" />
                                <p className="card-title">Squier Affinity Telecaster HH Electric Guitar</p>
                                <FourStars />
                                <Link>
                                    <p className="review-text text-center">(5 Reviews)</p>
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
                                <img src={process.env.PUBLIC_URL + '/Guitars-images/Squier Bullet Mustang HH Limited-Edition Electric Guitar Olympic White.jpg'} alt="guitar" className="img-thumbnail" />
                                <p className="card-title">Squier Bullet Mustang HH Limited-Edition</p>
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
    )
}
export default withRouter(Guitars) 