import React from 'react';
import FiveStars from './5Star';
import { Link, withRouter } from "react-router-dom";


function Home() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={process.env.PUBLIC_URL + '/home-guitars.jpeg'} className="d-block img-fluid home-img" alt="Guitars" />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/home-recording-img.jpeg'} className="d-block  img-fluid home-img" alt="Recording gear" />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/home-keyboard.jpeg'} className="d-block  img-fluid home-img" alt="Piano keyboard" />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/home-strings.jpeg'} className="d-block  img-fluid home-img" alt="Strings" />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/home-dj-gear.jpeg'} className="d-block  img-fluid home-img" alt="Dj gear" />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/home-drumset.jpeg'} className="d-block  img-fluid home-img" alt="Drumset" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <h2 className="text-center sub-page-heading">Hot Products</h2>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
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
                            <h2 className="card-header text-center">$229.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Recording-images/Focusrite Scarlett Solo Studio Pack (Gen 3).jpg'} alt="recording" className="img-thumbnail" />
                                <p className="card-title">Focusrite Scarlett Solo Studio Pack (Gen 3)</p>
                                <FiveStars />
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
                            <h2 className="card-header text-center">$236.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Drums-images/Boss DR-01S Rhythm Partner Drum Machine.jpg'} alt="drums" className="img-thumbnail" />
                                <p className="card-title">Boss DR-01S Rhythm Partner Drum Machine</p>
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
                            <h2 className="card-header text-center">$1,799.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Keyboards-images/Williams Symphony Grand Digital Piano with Bench Mahogany Red.jpg'} alt="keyboard" className="img-thumbnail" />
                                <p className="card-title">Williams Symphony Grand Digital Piano</p>
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
                </div>
            </div>

            <h2 className="text-center sub-page-heading">Special Deals</h2>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={process.env.PUBLIC_URL + '/Live-images/MXL 990 Condenser Microphone With Shockmount.jpg'} alt="live sound" className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><s>$99.99</s> $74.99</p>
                                <p className="card-text discount-text">25% off</p>
                                <Link className="btn product-description btn-link">Details</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={process.env.PUBLIC_URL + '/DJ-images/Denon DJ SC5000 Prime Professional Media Player.jpg'} alt="dj" className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><s>$749.99</s> $674.99</p>
                                <p className="card-text discount-text">10% off</p>
                                <Link className="btn product-description btn-link">Details</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={process.env.PUBLIC_URL + '/Accessories-images/Snark Super Snark 2 Clip-On Tuner Black.jpg'} alt="accessories" className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><s>$29.99</s> $26.99</p>
                                <p className="card-text discount-text">10% off</p>
                                <Link className="btn product-description btn-link">Details</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={process.env.PUBLIC_URL + '/Classroom-images/Suzuki Alto Xylophone.jpg'} alt="classroom" className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><s>$419.99</s> $356.99</p>
                                <p className="card-text discount-text">15% off</p>
                                <Link className="btn product-description btn-link">Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Home)