import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import FourStars from '../star-ratings/4Star';
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../AddToCart';



const Drums = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Drums</h1>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$89.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Drums-images/Alesis CompactKit 4 Electronic Drum Kit.jpg'} alt="drums" className="img-thumbnail" />
                                <p className="card-title">Alesis CompactKit 4 Electronic Drum Kit</p>
                                <FourStars />
                                <Link>
                                    <p className="review-text text-center">(3 Reviews)</p>
                                </Link>
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
                            <h2 className="card-header text-center">$899.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Drums-images/Alesis Crimson II 5-Piece Electronic Drum Kit.jpg'} alt="drums" className="img-thumbnail" />
                                <p className="card-title">Alesis Crimson II 5-Piece Electronic Drum Kit</p>
                                <FiveStars />
                                <Link>
                                    <p className="review-text text-center">(7 Reviews)</p>
                                </Link>
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
                                    <AddToCartBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$479.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Drums-images/DW Performance Series Floor Tom Pewter Sparkle 16 x 14 in..jpg'} alt="drums" className="img-thumbnail" />
                                <p className="card-title">DW Performance Series Floor Tom Pewter</p>
                                <ThreeStars />
                                <Link>
                                    <p className="review-text text-center">(5 Reviews)</p>
                                </Link>
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
                            <h2 className="card-header text-center">$119.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Drums-images/KAT Percussion Electronic Drum and Percussion Pad Sound Module.jpg'} alt="drums" className="img-thumbnail" />
                                <p className="card-title">KAT Percussion Electronic Drum</p>
                                <FourStars />
                                <Link>
                                    <p className="review-text text-center">(3 Reviews)</p>
                                </Link>
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
                                <img src={process.env.PUBLIC_URL + '/Drums-images/Musicians Gear Hickory Drum Sticks 10-Pack.jpg'} alt="drums" className="img-thumbnail" />
                                <p className="card-title">Musician's Gear Hickory Sticks</p>
                                <FourStars />
                                <Link>
                                    <p className="review-text text-center">(3 Reviews)</p>
                                </Link>
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
                            <h2 className="card-header text-center">$300.00</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Drums-images/Pork Pie Exotic Rosewood Zebrawood Snare Drum 14 x 6.5 in..jpg'} alt="drums" className="img-thumbnail" />
                                <p className="card-title">Pork Pie Exotic Snare</p>
                                <ThreeStars />
                                <Link>
                                    <p className="review-text text-center">(5 Reviews)</p>
                                </Link>
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
                            <h2 className="card-header text-center">$349.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Drums-images/Rogue 5-Piece Complete Drum Set Black.jpg'} alt="drums" className="img-thumbnail" />
                                <p className="card-title">Rogue 5-Piece Drum Set</p>
                                <FiveStars />
                                <Link>
                                    <p className="review-text text-center">(7 Reviews)</p>
                                </Link>
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
                            <h2 className="card-header text-center">$514.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Drums-images/Roland KD-120 V-Kick Trigger Pad 12 in..jpg'} alt="drums" className="img-thumbnail" />
                                <p className="card-title">Roland KD-120 V-Kick Trigger</p>
                                <FourStars />
                                <Link>
                                    <p className="review-text text-center">(3 Reviews)</p>
                                </Link>
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
                            <h2 className="card-header text-center">$549.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Drums-images/Simmons SD600 Electronic Drum Set With Mesh Heads and Bluetooth.jpg'} alt="drums" className="img-thumbnail" />
                                <p className="card-title">Simmons SD600 Drum Set</p>
                                <ThreeStars />
                                <Link>
                                    <p className="review-text text-center">(5 Reviews)</p>
                                </Link>
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
                            <h2 className="card-header text-center">$672.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Drums-images/Traps Drums A400 Portable Acoustic Drum Set.jpg'} alt="drums" className="img-thumbnail" />
                                <p className="card-title">Traps Drums A400 Portable</p>
                                <FourStars />
                                <Link>
                                    <p className="review-text text-center">(3 Reviews)</p>
                                </Link>
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
                            <h2 className="card-header text-center">$119.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Drums-images/Yamaha Stage Custom Birch Snare 14x5.5" 14 x 5.5 in. Natural Wood.jpg'} alt="drums" className="img-thumbnail" />
                                <p className="card-title">Yamaha Stage Custom Snare</p>
                                <ThreeStars />
                                <Link>
                                    <p className="review-text text-center">(5 Reviews)</p>
                                </Link>
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
export default withRouter(Drums) 