import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../AddToCart';



const Accessories = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Accessories</h1>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$153.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Accessories-images/Boss DB-90 Dr. Beat Metronome.jpg'} alt="accessories" className="img-thumbnail" />
                                <p className="card-title">Boss DB-90 Dr. Beat Metronome</p>
                                <div class="col text-center">
                                    <Link className="btn product-description btn-link">Details</Link>
                                </div>
                                <div class="col text-center">
                                    <AddToCartBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$59.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Accessories-images/DR-Pro-DJ-Laptop-Stand.jpg'} alt="accessories" className="img-thumbnail" />
                                <p className="card-title">DR-Pro-DJ-Laptop-Stand</p>
                                <div class="col text-center">
                                    <Link className="btn product-description btn-link">Details</Link>
                                </div>
                                <div class="col text-center">
                                    <AddToCartBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$11.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Accessories-images/Elixer-Electric-Guitar-Strings.jpg'} alt="accessories" className="img-thumbnail" />
                                <p className="card-title">Elixer Electric Guitar Strings</p>
                                <div class="col text-center">
                                    <Link className="btn product-description btn-link">Details</Link>
                                </div>
                                <div class="col text-center">
                                    <AddToCartBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$39.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Accessories-images/Fender Deluxe Hanging Guitar Stand.jpg'} alt="accessories" className="img-thumbnail" />
                                <p className="card-title">Fender Deluxe Guitar Stand</p>
                                <div class="col text-center">
                                    <Link className="btn product-description btn-link">Details</Link>
                                </div>
                                <div class="col text-center">
                                    <AddToCartBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$4.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Accessories-images/Fingerease Guitar String Lubricant.jpg'} alt="accessories" className="img-thumbnail" />
                                <p className="card-title">Fingerease Guitar String Lubricant</p>
                                <div class="col text-center">
                                    <Link className="btn product-description btn-link">Details</Link>
                                </div>
                                <div class="col text-center">
                                    <AddToCartBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$24.83</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Accessories-images/Korg TM-60 Tuner Metronome White.jpg'} alt="accessories" className="img-thumbnail" />
                                <p className="card-title">Korg TM-60 Tuner Metronome White</p>
                                <div class="col text-center">
                                    <Link className="btn product-description btn-link">Details</Link>
                                </div>
                                <div class="col text-center">
                                    <AddToCartBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$6.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Accessories-images/Musicians Gear Braided Instrument Cable Green 1 ft.jpg'} alt="accessories" className="img-thumbnail" />
                                <p className="card-title">Musicians Gear Braided Cable</p>
                                <div class="col text-center">
                                    <Link className="btn product-description btn-link">Details</Link>
                                </div>
                                <div class="col text-center">
                                    <AddToCartBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$79.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Accessories-images/Musicians Gear Deluxe Dreadnought Case Black.jpg'} alt="accessories" className="img-thumbnail" />
                                <p className="card-title">Musician's Gear Deluxe  Case</p>
                                <div class="col text-center">
                                    <Link className="btn product-description btn-link">Details</Link>
                                </div>
                                <div class="col text-center">
                                    <AddToCartBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$29.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Accessories-images/Musicians Gear KBX2 Double-Braced Keyboard Stand Black.jpg'} alt="accessories" className="img-thumbnail" />
                                <p className="card-title">Musician's Gear Double-Braced Keyboard Stand</p>
                                <div class="col text-center">
                                    <Link className="btn product-description btn-link">Details</Link>
                                </div>
                                <div class="col text-center">
                                    <AddToCartBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$59.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Accessories-images/Rapco RoadHOG XLR Microphone Cable 60 ft.jpg'} alt="accessories" className="img-thumbnail" />
                                <p className="card-title">Rapco RoadHOG XLR Microphone Cable 60 ft</p>
                                <div class="col text-center">
                                    <Link className="btn product-description btn-link">Details</Link>
                                </div>
                                <div class="col text-center">
                                    <AddToCartBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$149.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Accessories-images/Road Runner 5-Piece Fusion Drum Bag Set Black.jpg'} alt="accessories" className="img-thumbnail" />
                                <p className="card-title">Road Runner 5-Piece Fusion Drum Bag Set</p>
                                <div class="col text-center">
                                    <Link className="btn product-description btn-link">Details</Link>
                                </div>
                                <div class="col text-center">
                                    <AddToCartBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$29.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Accessories-images/Snark Super Snark 2 Clip-On Tuner Black.jpg'} alt="accessories" className="img-thumbnail" />
                                <p className="card-title">Snark Super Snark 2 Clip-On Tuner Black</p>
                                <div class="col text-center">
                                    <Link className="btn product-description btn-link">Details</Link>
                                </div>
                                <div class="col text-center">
                                    <AddToCartBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Accessories) 