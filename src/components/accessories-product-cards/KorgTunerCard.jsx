import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import ThreeStars from '../star-ratings/3Star';


const KorgTunerCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$24.83</h2>
                <div className="card-body">
                    <img src={process.env.PUBLIC_URL + '/Accessories-images/Korg TM-60 Tuner Metronome White.jpg'} alt="accessories" className="img-thumbnail" />
                    <p className="card-title">Korg TM-60 Tuner Metronome White</p>
                    <ThreeStars />
                    <p className="review-text text-center">(2 Reviews)</p>
                    <div class="col text-center">
                        <Link className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(KorgTunerCard)