import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import FourStars from '../star-ratings/4Star';
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../AddToCart';



const Recording = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Recording Gear</h1>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$169.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Recording-images/Focusrite Scarlett 2i2 USB Audio Interface (Gen 3).jpg'} alt="recording" className="img-thumbnail" />
                                <p className="card-title">Focusrite Scarlett 2i2 USB Audio Interface </p>
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
                                    <AddToCartBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$199.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Recording-images/Line 6 POD Studio UX2 with POD Farm.jpg'} alt="recording" className="img-thumbnail" />
                                <p className="card-title">Line 6 POD Studio UX2 with POD Farm</p>
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
                            <h2 className="card-header text-center">$249.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Recording-images/Presonus AudioBox 96 Studio Package.jpg'} alt="recording" className="img-thumbnail" />
                                <p className="card-title">Presonus AudioBox 96 Studio Package</p>
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
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$999.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Recording-images/Rode Complete Podcaster Recording Bundle.jpg'} alt="recording" className="img-thumbnail" />
                                <p className="card-title">Rode Complete Podcaster Bundle</p>
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
                            <h2 className="card-header text-center">$349.00</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Recording-images/Rode Complete Studio Kit with NT1 Microphone and AI-1 Interface.jpg'} alt="recording" className="img-thumbnail" />
                                <p className="card-title">Rode Complete Studio Kit</p>
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
                            <h2 className="card-header text-center">$249.00</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Recording-images/sE Electronics X1S Studio Bundle.jpg'} alt="recording" className="img-thumbnail" />
                                <p className="card-title">sE Electronics X1S Studio Bundle</p>
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
                            <h2 className="card-header text-center">$199.00</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Recording-images/sE Electronics X1S Vocal Pack.jpg'} alt="recording" className="img-thumbnail" />
                                <p className="card-title">sE Electronics X1S Vocal Pack</p>
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
                            <h2 className="card-header text-center">$569.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Recording-images/Icon Qcon EX G2 Control Surface.jpg'} alt="recording" className="img-thumbnail" />
                                <p className="card-title">Icon Qcon EX G2 Control Surface</p>
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
                            <h2 className="card-header text-center">$499.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Recording-images/Shure Choose Your Microphone Bundle SM81.jpg'} alt="recording" className="img-thumbnail" />
                                <p className="card-title">Shure Choose Your Mic Bundle</p>
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
                            <h2 className="card-header text-center">$899.00</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Recording-images/Universal Audio Apollo Twin X DUO Thunderbolt 3 Audio Interface.jpg'} alt="recording" className="img-thumbnail" />
                                <p className="card-title">Universal Audio Apollo Twin X</p>
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
                            <h2 className="card-header text-center">$219.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Recording-images/Zoom handy video recorder.jpg'} alt="recording" className="img-thumbnail" />
                                <p className="card-title">Zoom handy video recorder</p>
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
export default withRouter(Recording) 