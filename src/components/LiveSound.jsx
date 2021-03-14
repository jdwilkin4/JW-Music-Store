import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from './3Star';
import FourStars from './4Star';
import FiveStars from './5Star';


const LiveSound = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Live Sound</h1>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$149.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Live-images/Behringer XENYX 1002B 5-Channel Compact Mixer.jpg'} alt="live sound" className="img-thumbnail" />
                                <p className="card-title">Behringer XENYX 1002B 5-Channel Compact Mixer</p>
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
                            <h2 className="card-header text-center">$99.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Live-images/Digital Reference DRDK4 4-Piece Drum Mic Kit.jpg'} alt="live sound" className="img-thumbnail" />
                                <p className="card-title">Digital Reference DRDK4 4-Piece Drum Mic Kit</p>
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
                            <h2 className="card-header text-center">$59.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Live-images/Digital Reference DRV200 Dynamic Lead Vocal Mic.jpg'} alt="live sound" className="img-thumbnail" />
                                <p className="card-title">Digital Reference DRV200 Dynamic Lead Vocal Mic</p>
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
                            <h2 className="card-header text-center">$249.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Live-images/Harbinger L1402FX-USB 14-Channel Mixer With Digital Effects and USB.jpg'} alt="live sound" className="img-thumbnail" />
                                <p className="card-title">Harbinger L1402FX-USB 14-Channel Mixer</p>
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
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$249.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Live-images/Harbinger VARI V2212 600W 12" Two-Way Loudspeaker.jpg'} alt="live sound" className="img-thumbnail" />
                                <p className="card-title">Harbinger VARI V2212 600W</p>
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
                            <h2 className="card-header text-center">$149.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Live-images/Kustom PA KPX110M 10" Passive Monitor.jpg'} alt="live sound" className="img-thumbnail" />
                                <p className="card-title">Kustom PA KPX110M</p>
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
                            <h2 className="card-header text-center">$30.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Live-images/Livewire Cable Tester.jpg'} alt="live sound" className="img-thumbnail" />
                                <p className="card-title">Livewire Cable Tester</p>
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
                            <h2 className="card-header text-center">$3.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Live-images/Musician Gear Clip-Type Microphone Holder.jpg'} alt="live sound" className="img-thumbnail" />
                                <p className="card-title">Musician Gear Clip-Type</p>
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
                            <h2 className="card-header text-center">$74.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Live-images/MXL 990 Condenser Microphone With Shockmount.jpg'} alt="live sound" className="img-thumbnail" />
                                <p className="card-title">MXL 990 Condenser Microphone</p>
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
                            <h2 className="card-header text-center">$399.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Live-images/Shure SM7B Cardioid Dynamic Microphone.jpg'} alt="live sound" className="img-thumbnail" />
                                <p className="card-title">Shure SM7B Cardioid Dynamic Microphone</p>
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
                            <h2 className="card-header text-center">$24.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Live-images/Sterling Audio STPF2 Professional Mesh Pop Filter.jpg'} alt="live sound" className="img-thumbnail" />
                                <p className="card-title">Sterling Audio Professional Mesh Pop Filter</p>
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
                            <h2 className="card-header text-center">$439.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Live-images/Tascam TA-1VP Vocal Processor with Antares Auto-Tune.jpg'} alt="live sound" className="img-thumbnail" />
                                <p className="card-title">Tascam TA-1VP Vocal Processor with Antares</p>
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
export default withRouter(LiveSound) 