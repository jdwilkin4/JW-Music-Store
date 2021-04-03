import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';



const Music = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Sheet Music</h1>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <h2 className="card-header text-center">$7.67</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Music-images/Alfred Alfreds Basic Piano Library Lesson Book Level 1A.jpg'} alt="music" className="img-thumbnail" />
                                <p className="card-title">Alfred's Basic Piano Lesson Book Level 1A</p>
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
                            <h2 className="card-header text-center">$3.95</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Music-images/Hal Leonard Aladdin (Medley) 2-Part Arranged by Ed Lojeski.jpg'} alt="music" className="img-thumbnail" />
                                <p className="card-title">Hal Leonard Aladdin (Medley) 2-Part</p>
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
                            <h2 className="card-header text-center">$3.50</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Music-images/Hal Leonard E-Z Play Key Stickers for Use with All Keyboards.jpg'} alt="music" className="img-thumbnail" />
                                <p className="card-title">Hal Leonard E-Z Play Key Stickers All Keyboards</p>
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
                            <h2 className="card-header text-center">$10.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Music-images/Hal Leonard Essential Elements for Band - Bb Clarinet 1 Book Online Audio.jpg'} alt="music" className="img-thumbnail" />
                                <p className="card-title">Hal Leonard Elements - Clarinet</p>
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
                            <h2 className="card-header text-center">$10.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Music-images/Hal Leonard Essential Elements for Band - Bb Trumpet 1 Book Online Audio.jpg'} alt="music" className="img-thumbnail" />
                                <p className="card-title">Hal Leonard Elements - Trumpet</p>
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
                            <h2 className="card-header text-center">$8.92</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Music-images/Hal Leonard Essential Elements for Band - Eb Alto Saxophone 1 Book Online Audio.jpg'} alt="music" className="img-thumbnail" />
                                <p className="card-title">Hal Leonard Elements - Alto Sax</p>
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
                            <h2 className="card-header text-center">$10.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Music-images/Hal Leonard Essential Elements for Strings - Violin 1 Book Online Audio.jpg'} alt="music" className="img-thumbnail" />
                                <p className="card-title">Hal Leonard Elements Strings - Violin I</p>
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
                            <h2 className="card-header text-center">$24.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Music-images/Hal Leonard The Beatles Solo Guitar Tab Arrangments Book.jpg'} alt="music" className="img-thumbnail" />
                                <p className="card-title">Hal Leonard The Beatles Solo Guitar</p>
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
                            <h2 className="card-header text-center">$2.50</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Music-images/Hal Leonard Wide Staff Manuscript Paper (Red Cover).jpg'} alt="music" className="img-thumbnail" />
                                <p className="card-title">Hal Leonard Staff Manuscript Paper </p>
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
                            <h2 className="card-header text-center">$3.95</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Music-images/LMI Recorder Method Book.jpg'} alt="music" className="img-thumbnail" />
                                <p className="card-title"> The LMI Recorder Method Book</p>
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
                            <h2 className="card-header text-center">$9.99</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Music-images/Mel Bay Modern Guitar Method Grade 1 Book.jpg'} alt="music" className="img-thumbnail" />
                                <p className="card-title">Mel Bay Modern Guitar Method</p>
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
                            <h2 className="card-header text-center">$6.00</h2>
                            <div className="card-body">
                                <img src={process.env.PUBLIC_URL + '/Music-images/Walrus Productions Guitar Progressions Chord Chart.jpg'} alt="music" className="img-thumbnail" />
                                <p className="card-title">Walrus Guitar Chord Chart</p>
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
export default withRouter(Music)