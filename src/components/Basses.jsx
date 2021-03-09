import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from './3Star';
import FourStars from './4Star';
import FiveStars from './5Star';

const Basses = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Basses</h1>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$1,499.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Basses-images/Cremona SB-3 Upright Bass.jpg'} alt="bass" className="img-thumbnail" />
                                <p className="card-title">Cremona SB-3 Upright Bass 3/4</p>
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
                            <h2 className="card-header text-center">$1,999.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Basses-images/Fender Tony Franklin Fretless Precision Bass 3-Color Sunburst.jpg'} alt="bass" className="img-thumbnail" />
                                <p className="card-title">Fender Tony Franklin Fretless</p>
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
                            <h2 className="card-header text-center">$749.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Basses-images/Ibanez Bass Workshop SRH505F Fretless 5-String Electric Bass Flat Natural Browned Burst.jpg'} alt="bass" className="img-thumbnail" />
                                <p className="card-title">Ibanez Bass SRH505F</p>
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
                            <h2 className="card-header text-center">$179.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Basses-images/Ibanez GSRM20 Mikro Short-Scale Bass Guitar Starlight Blue.jpg'} alt="bass" className="img-thumbnail" />
                                <p className="card-title">Ibanez GSRM20 Mikro Short-Scale</p>
                                <ThreeStars />
                                <Link>
                                    <p className="review-text text-center">(10 Reviews)</p>
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
                                <img src={process.env.PUBLIC_URL + '/Basses-images/Rogue LX205B 5-String Series III Electric Bass Guitar Candy Apple Red.jpg'} alt="bass" className="img-thumbnail" />
                                <p className="card-title">Rogue LX205B 5-String</p>
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
                            <h2 className="card-header text-center">$899.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Basses-images/Schecter Guitar Research Stiletto Session-5 Fretless Electric Bass Satin Aged Natural.jpg'} alt="bass" className="img-thumbnail" />
                                <p className="card-title">Schecter Guitar Research Stiletto</p>
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
                            <h2 className="card-header text-center">$849.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Basses-images/Schecter Guitar Research Stiletto Studio-4 Fretless Bass Satin Honey.jpg'} alt="bass" className="img-thumbnail" />
                                <p className="card-title">Schecter Guitar Studio-4</p>
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
                            <h2 className="card-header text-center">$1,599.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Basses-images/Silver Creek Rocker Upright String Bass Outfit.jpg'} alt="bass" className="img-thumbnail" />
                                <p className="card-title">Silver Creek Rocker Upright</p>
                                <ThreeStars />
                                <Link>
                                    <p className="review-text text-center">(10 Reviews)</p>
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
                            <h2 className="card-header text-center">$299.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Basses-images/Sterling by Music Man StingRay Ray4 Electric Bass Vintage Cream White Pickguard.jpg'} alt="bass" className="img-thumbnail" />
                                <p className="card-title">Sterling by Music Man StingRay</p>
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
                            <h2 className="card-header text-center">$299.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Basses-images/Sterling by Music Man StingRay Ray4 Maple Fingerboard Electric Bass Satin Vintage Sunburst Black Pickguard.jpg'} alt="bass" className="img-thumbnail" />
                                <p className="card-title">Sterling by Music Man Ray4</p>
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
                            <h2 className="card-header text-center">$399.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Basses-images/Yamaha TRBX305 5-String Electric Bass Candy Apple Red Rosewood Fretboard.jpg'} alt="bass" className="img-thumbnail" />
                                <p className="card-title">Yamaha TRBX305 5-String</p>
                                <ThreeStars />
                                <Link>
                                    <p className="review-text text-center">(10 Reviews)</p>
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
                                <img src={process.env.PUBLIC_URL + '/Basses-images/Yamaha TRBX504 4-String Premium Electric Bass Transparent Brown Rosewood Fretboard.jpg'} alt="bass" className="img-thumbnail" />
                                <p className="card-title">Yamaha TRBX504 4-String</p>
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
export default withRouter(Basses) 