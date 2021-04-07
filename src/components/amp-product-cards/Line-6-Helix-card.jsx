import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const Line6HelixCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$1,699.99</h2>
                <div className="card-body">
                    <img src={process.env.PUBLIC_URL + '/Amps-images/Line 6 Helix Multi-Effects Guitar Pedal.jpg'} alt="amps" className="img-thumbnail" />
                    <p className="card-title">Line 6 Helix Guitar Pedal</p>
                    <FourStars />
                    <p className="review-text text-center">(3 Reviews)</p>
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
export default withRouter(Line6HelixCard)