import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const FenderRUMBLECard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$119.99</h2>
                <div className="card-body">
                    <img src={process.env.PUBLIC_URL + '/Amps-images/Fender RUMBLE 25 1x8 25W Bass Combo Amp.jpg'} alt="amps" className="img-thumbnail" />
                    <p className="card-title">Fender RUMBLE 25 Amp</p>
                    <FiveStars />
                    <p className="review-text text-center">(7 Reviews)</p>
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
export default withRouter(FenderRUMBLECard)