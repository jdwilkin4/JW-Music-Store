import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from './3Star';
import FourStars from './4Star';
import FiveStars from './5Star';


const Amps = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Amps &amp; Effects</h1>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$1,699.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Amps-images/Ampeg SVT-4 PRO Series Bass Head.jpg'} alt="amps" className="img-thumbnail" />
                                <p className="card-title">Ampeg SVT-4 PRO Series</p>
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
                            <h2 className="card-header text-center">$354.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Amps-images/Digitech Trio+ Band Creator Plus Looper Guitar Effects Pedal.jpg'} alt="amps" className="img-thumbnail" />
                                <p className="card-title">Digitech Trio+ Band Creator</p>
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
                            <h2 className="card-header text-center">$119.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Amps-images/Fender RUMBLE 25 1x8 25W Bass Combo Amp.jpg'} alt="amps" className="img-thumbnail" />
                                <p className="card-title">Fender RUMBLE 25</p>
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
                            <h2 className="card-header text-center">$164.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Amps-images/Gator GPT-PWR Powered Pedal Tote Pedal Board with Carry Bag Black.jpg'} alt="amps" className="img-thumbnail" />
                                <p className="card-title">Gator GPT-PWR Powered Pedal</p>
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
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$999.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Amps-images/HeadRush Pedalboard Multi-Effects Processor.jpg'} alt="amps" className="img-thumbnail" />
                                <p className="card-title">HeadRush Pedalboard Multi-Effects Processor</p>
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
                            <h2 className="card-header text-center">$1,699.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Amps-images/Line 6 Helix Multi-Effects Guitar Pedal.jpg'} alt="amps" className="img-thumbnail" />
                                <p className="card-title">Line 6 Helix Multi-Effects Guitar Pedal</p>
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
                            <h2 className="card-header text-center">$199.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Amps-images/LR Baggs Para Acoustic Guitar DI and Preamp.jpg'} alt="amps" className="img-thumbnail" />
                                <p className="card-title">LR Baggs Para Acoustic Guitar DI and Preamp</p>
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
                            <h2 className="card-header text-center">$299.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Amps-images/LR Baggs Venue DI Acoustic Guitar Direct Box and Preamp.jpg'} alt="amps" className="img-thumbnail" />
                                <p className="card-title">LR Baggs Venue DI Acoustic Guitar &amp; Preamp</p>
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
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$114.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Amps-images/Musicians Gear Powered Pedal Board and Gig Bag.jpg'} alt="amps" className="img-thumbnail" />
                                <p className="card-title">Musician's Gear Powered Pedal</p>
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
                            <h2 className="card-header text-center">$69.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Amps-images/Pedaltrain Nano Pedal Board with Soft Case Black.jpg'} alt="amps" className="img-thumbnail" />
                                <p className="card-title">Pedaltrain Nano Pedal Board </p>
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
                            <h2 className="card-header text-center">$44.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Amps-images/Rogue G10 10W 1x5 Guitar Combo Amp Black.jpg'} alt="amps" className="img-thumbnail" />
                                <p className="card-title">Rogue G10 10W Amp</p>
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
                            <h2 className="card-header text-center">$98.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Amps-images/TC Electronic Ditto Looper Guitar Effects Pedal.jpg'} alt="amps" className="img-thumbnail" />
                                <p className="card-title">TC Electronic Ditto Looper</p>
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
                </div>
            </div>
        </div>
    )
}
export default withRouter(Amps) 