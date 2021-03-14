import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from './3Star';
import FourStars from './4Star';
import FiveStars from './5Star';

const Keyboards = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Keyboards</h1>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$599.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Keyboards-images/Korg B2SP 88-Key Digital Piano with Stand Black.jpg'} alt="keyboard" className="img-thumbnail" />
                                <p className="card-title">Korg B2SP 88-Key Digital Piano</p>
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
                            <h2 className="card-header text-center">$4,699.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Keyboards-images/Nord Stage 3 88 Red.jpg'} alt="keyboard" className="img-thumbnail" />
                                <p className="card-title">Nord Stage 3 88 Red</p>
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
                            <h2 className="card-header text-center">$2,699.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Keyboards-images/Roland DP603 Digital Home Piano Contemporary Black.jpg'} alt="keyboard" className="img-thumbnail" />
                                <p className="card-title">Roland DP603 Digital Piano</p>
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
                            <h2 className="card-header text-center">$1,199.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Keyboards-images/Suzuki CTP-88 Innovation Digital Piano.jpg'} alt="keyboard" className="img-thumbnail" />
                                <p className="card-title">Suzuki CTP-88 Digital Piano</p>
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
                            <h2 className="card-header text-center">$2,999.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Keyboards-images/Suzuki MDG-330 Mini Grand Digital Piano.jpg'} alt="keyboard" className="img-thumbnail" />
                                <p className="card-title">Suzuki MDG-330 Mini Grand Digital Piano</p>
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
                            <h2 className="card-header text-center">$849.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Keyboards-images/Williams Overture 2 88-Key Console Digital Piano and Williams WPB Piano Bench Kit Black.jpg'} alt="keyboard" className="img-thumbnail" />
                                <p className="card-title">Williams Overture 2 88-Key Console Digital Piano</p>
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
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$1,099.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Keyboards-images/Yamaha Arius YDP-144 Digital Console Piano Black.jpg'} alt="keyboard" className="img-thumbnail" />
                                <p className="card-title">Yamaha Arius YDP-144 Digital Piano</p>
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
                            <h2 className="card-header text-center">$16,999</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Keyboards-images/Yamaha Clavinova CVP-809 Digital Grand Piano with Bench Polished White.jpg'} alt="keyboard" className="img-thumbnail" />
                                <p className="card-title">Yamaha Clavinova CVP-809 Digital Grand Piano</p>
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
                            <h2 className="card-header text-center">$1,999.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Keyboards-images/Yamaha CP73 73-Key Digital Stage Piano.jpg'} alt="keyboard" className="img-thumbnail" />
                                <p className="card-title">Yamaha CP73 73-Key Digital Stage Piano</p>
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
                                <img src={process.env.PUBLIC_URL + '/Keyboards-images/Yamaha P-45 88-Key Weighted Action Digital Piano Black.jpg'} alt="keyboard" className="img-thumbnail" />
                                <p className="card-title">Yamaha P-45 88-Key Weighted Digital Piano</p>
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
                            <h2 className="card-header text-center">$629.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Keyboards-images/Yamaha P-45 Digital Piano With Stand and Bench.jpg'} alt="keyboard" className="img-thumbnail" />
                                <p className="card-title">Yamaha P-45 Digital Piano With Stand and Bench</p>
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
            </div>
        </div>
    )
}
export default withRouter(Keyboards) 