import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const RolandKd120DrumCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$514.99</h2>
                <div className="card-body">
                    <Link to="/rolandkd120">
                        <img src={process.env.PUBLIC_URL + '/Drums-images/Roland KD-120 V-Kick Trigger Pad 12 in..jpg'} alt="drums" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Roland KD-120 V-Kick Trigger</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/rolandkd120" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(RolandKd120DrumCard)