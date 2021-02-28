import React from 'react';
import { Link, withRouter } from "react-router-dom";


const DJ = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">DJ Gear</h1>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$65.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/DJ-images/Art DJ Pre II Phono Preamp.jpg'} alt="dj" className="img-thumbnail" />
                                <p className="card-title">Art DJ Pre II Phono Preamp</p>
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
                                <img src={process.env.PUBLIC_URL + '/DJ-images/Art USB Phono Plus Project Series.jpg'} alt="dj" className="img-thumbnail" />
                                <p className="card-title">Art USB Phono Plus Series</p>
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
                                <img src={process.env.PUBLIC_URL + '/DJ-images/BBE FJB-200X Phono Preamp.jpg'} alt="dj" className="img-thumbnail" />
                                <p className="card-title">BBE FJB-200X Phono Preamp</p>
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
                                <img src={process.env.PUBLIC_URL + '/DJ-images/Denon DJ SC5000 Prime Professional Media Player.jpg'} alt="dj" className="img-thumbnail" />
                                <p className="card-title">Denon DJ SC5000 Prime</p>
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
                            <h2 className="card-header text-center">$899.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/DJ-images/Denon DJ X1800 Prime 4-Channel Club Mixer.jpg'} alt="dj" className="img-thumbnail" />
                                <p className="card-title">Denon DJ X1800 Prime</p>
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
                            <h2 className="card-header text-center">$249.95</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/DJ-images/Gemini CDMP 1500 Single 1U CD MP3 USB Player.jpg'} alt="dj" className="img-thumbnail" />
                                <p className="card-title">Gemini CDMP 1500 Player</p>
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
                            <h2 className="card-header text-center">$699.00</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/DJ-images/Numark NVII DJ Controller.jpg'} alt="dj" className="img-thumbnail" />
                                <p className="card-title">Numark NVII DJ Controller</p>
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
                            <h2 className="card-header text-center">$119.00</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/DJ-images/Numark Party Mix DJ Controller.jpg'} alt="dj" className="img-thumbnail" />
                                <p className="card-title">Numark Party Controller</p>
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
                            <h2 className="card-header text-center">$499.00</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/DJ-images/Numark Scratch 2-Channel DJ Mixer for Serato DJ Pro.jpg'} alt="dj" className="img-thumbnail" />
                                <p className="card-title">Numark Scratch 2-Channel DJ Mixer</p>
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
                            <h2 className="card-header text-center">$2,199.00</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/DJ-images/Pioneer DJM-900NXS2 Professional 4-Channel Digital DJ Mixer with Dual USB for Serato, Traktor and rekordbox.jpg'} alt="dj" className="img-thumbnail" />
                                <p className="card-title">Pioneer DJM-900NXS2 4-Channel Mixer</p>
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
                            <h2 className="card-header text-center">$699.00</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/DJ-images/Pioneer PLX-1000 Professional Turntable.jpg'} alt="dj" className="img-thumbnail" />
                                <p className="card-title">Pioneer PLX-1000 Professional Turntable</p>
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
                                <img src={process.env.PUBLIC_URL + '/DJ-images/Roland DJ-202 Serato DJ Controller.jpg'} alt="dj" className="img-thumbnail" />
                                <p className="card-title">Roland DJ-202 Serato DJ Controller</p>
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
export default withRouter(DJ)