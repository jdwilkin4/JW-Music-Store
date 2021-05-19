import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { BossDr01SDrumCard, FocusriteScarlettPackCard, StratocasterHSSCard, WilliamsSymphonyKeyboardCard } from './component-exports';


const Home = () => {
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
                        <img src={process.env.PUBLIC_URL + '/home-dj-gear.jpeg'} className="d-block  img-fluid home-img" alt="Dj gear" />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/home-drumset.jpeg'} className="d-block  img-fluid home-img" alt="Drumset" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <h2 className="text-center product-page-heading">Hot Products</h2>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <StratocasterHSSCard />
                    <FocusriteScarlettPackCard />
                    <BossDr01SDrumCard />
                    <WilliamsSymphonyKeyboardCard />
                </div>
            </div>

            <div className="product-div">
                <div className="row">
                    <div className="card home-card">
                        <img src={process.env.PUBLIC_URL + '/Drums-images/Rogue 5-Piece Complete Drum Set Black.jpg'} alt="classNameroom" className="card-img-top" />
                        <div className="card-body">
                            <Link to="/drums" className="card-text btn product-description btn-link">Check out our Drums</Link>
                        </div>
                    </div>
                    <div className="card home-card">
                        <img src={process.env.PUBLIC_URL + '/Keyboards-images/Yamaha CP73 73-Key Digital Stage Piano.jpg'} alt="keyboard" className="card-img-top" />
                        <div className="card-body">
                            <Link to="/keyboards" className="card-text btn product-description btn-link">Check out our Keyboards</Link>
                        </div>
                    </div>
                </div>
            </div>



            <h2 className="text-center product-page-heading">Special Deals</h2>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <Link to="/mxl990mic">
                                <img src={process.env.PUBLIC_URL + '/Live-images/MXL 990 Condenser Microphone With Shockmount.jpg'} alt="live sound" className="card-img-top" />
                            </Link>
                            <div className="card-body">
                                <p className="card-text"><s>$99.99</s> $74.99</p>
                                <p className="card-text discount-text">25% off</p>
                                <Link to="/mxl990mic" className="btn product-description btn-link">Details</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <Link to="/denondjsc5000">
                                <img src={process.env.PUBLIC_URL + '/DJ-images/Denon DJ SC5000 Prime Professional Media Player.jpg'} alt="dj" className="card-img-top" />
                            </Link>
                            <div className="card-body">
                                <p className="card-text"><s>$749.99</s> $674.99</p>
                                <p className="card-text discount-text">10% off</p>
                                <Link to="/denondjsc5000" className="btn product-description btn-link">Details</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <Link to="/snarksupersnarktuner">
                                <img src={process.env.PUBLIC_URL + '/Accessories-images/Snark Super Snark 2 Clip-On Tuner Black.jpg'} alt="accessories" className="card-img-top" />
                            </Link>
                            <div className="card-body">
                                <p className="card-text"><s>$29.99</s> $26.99</p>
                                <p className="card-text discount-text">10% off</p>
                                <Link to="/snarksupersnarktuner" className="btn product-description btn-link">Details</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <Link to="/bossdb90drbeat">
                                <img src={process.env.PUBLIC_URL + '/Accessories-images/Boss DB-90 Dr. Beat Metronome.jpg'} alt="accessories" className="card-img-top" />
                            </Link>
                            <div className="card-body">
                                <p className="card-text"><s>$153.99</s> $130.89</p>
                                <p className="card-text discount-text">15% off</p>
                                <Link to="/bossdb90drbeat" className="btn product-description btn-link">Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="product-div">
                <div className="row">
                    <div className="card home-card">
                        <img src={process.env.PUBLIC_URL + '/Recording-images/Rode Complete Podcaster Recording Bundle.jpg'} alt="recording" className="card-img-top" />
                        <div className="card-body">
                            <Link to="/recording" className="card-text btn product-description btn-link">Best Recording Gear</Link>
                        </div>
                    </div>
                    <div className="card home-card">
                        <img src={process.env.PUBLIC_URL + '/DJ-images/Roland DJ-202 Serato DJ Controller.jpg'} alt="dj" className="card-img-top" />
                        <div className="card-body">
                            <Link to="/DJ" className="card-text btn product-description btn-link">Hottest DJ Gear</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Home)