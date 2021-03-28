import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../AddToCart';



const Band = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Band &amp; Orchestra</h1>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$249.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Band-images/Bellafina Musicale Series Viola Outfit 14 in..jpg'} alt="band" className="img-thumbnail" />
                                <p className="card-title">Bellafina Musicale Series Viola Outfit</p>
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
                            <h2 className="card-header text-center">$469.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Band-images/Etude EAS-100 Student Alto Saxophone Lacquer.jpg'} alt="band" className="img-thumbnail" />
                                <p className="card-title">Etude EAS-100 Student Alto Sax</p>
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
                            <h2 className="card-header text-center">$264.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Band-images/Etude ETB-100 Series Student Trombone Lacquer.jpg'} alt="band" className="img-thumbnail" />
                                <p className="card-title">Etude ETB-100 Trombone</p>
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
                            <h2 className="card-header text-center">$264.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Band-images/Etude ETR-100 Series Student Bb Trumpet Lacquer.jpg'} alt="band" className="img-thumbnail" />
                                <p className="card-title">Etude ETR-100 Bb Trumpet</p>
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
                            <h2 className="card-header text-center">$799.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Band-images/Etude ETS-200 Student Series Tenor Saxophone Lacquer.jpg'} alt="band" className="img-thumbnail" />
                                <p className="card-title">Etude ETS-200 Student Series Tenor Saxophone</p>
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
                            <h2 className="card-header text-center">$264.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Band-images/Etude Model EFL-100 Student Flute Closed Hole, Offset G, C Foot.jpg'} alt="band" className="img-thumbnail" />
                                <p className="card-title">Etude Model EFL-100 Student Flute Closed Hole</p>
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
                            <h2 className="card-header text-center">$264.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Band-images/Etude Student Clarinet Model ECL-100 Standard.jpg'} alt="band" className="img-thumbnail" />
                                <p className="card-title">Etude Student Clarinet Model ECL-100</p>
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
                                <img src={process.env.PUBLIC_URL + '/Band-images/Etude Student Series Cello Outfit.jpg'} alt="band" className="img-thumbnail" />
                                <p className="card-title">Etude Student Series Cello Outfit 1/4 Size</p>
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
                            <h2 className="card-header text-center">$11,829</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Band-images/Miraphone 188-5U Series 5-Valve CC Tuba.jpg'} alt="band" className="img-thumbnail" />
                                <p className="card-title">Miraphone 188-5U Series 5-Valve CC Tuba</p>
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
                            <h2 className="card-header text-center">$1,349.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Band-images/Silver Creek Thumper Upright String Bass Outfit.jpg'} alt="band" className="img-thumbnail" />
                                <p className="card-title">Silver Creek Thumper Upright String Bass Outfit</p>
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
                                <img src={process.env.PUBLIC_URL + '/Band-images/Stentor 1500 Student II Series Violin Outfit Outfit.jpg'} alt="band" className="img-thumbnail" />
                                <p className="card-title">Stentor 1500 Student II Series Violin Outfit Outfit</p>
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
                            <h2 className="card-header text-center">$2,271.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Band-images/Yamaha YHR-314II Student F French Horn.jpg'} alt="band" className="img-thumbnail" />
                                <p className="card-title">Yamaha YHR-314II Student F French Horn</p>
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
export default withRouter(Band)