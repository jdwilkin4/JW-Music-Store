import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import FourStars from '../star-ratings/4Star';
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';
import { FocusriteScarlettCard, FocusriteScarlettPackCard, Line6PodStudioCard, PresonusAudioBox96Card } from '../component-exports';
import { RodeCompletePodcasterCard } from '../component-exports';

const Recording = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Recording Gear</h1>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <FocusriteScarlettCard />
                    <FocusriteScarlettPackCard />
                    <Line6PodStudioCard />
                    <PresonusAudioBox96Card />
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <RodeCompletePodcasterCard />
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$349.00</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Recording-images/Rode Complete Studio Kit with NT1 Microphone and AI-1 Interface.jpg'} alt="recording" className="img-thumbnail" />
                                <p className="card-title">Rode Complete Studio Kit</p>
                                <ThreeStars />

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