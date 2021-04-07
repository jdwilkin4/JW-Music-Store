import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const LRBaggsVenueCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$299.99</h2>
                <div className="card-body">
                    <img src={process.env.PUBLIC_URL + '/Amps-images/LR Baggs Venue DI Acoustic Guitar Direct Box and Preamp.jpg'} alt="amps" className="img-thumbnail" />
                    <p className="card-title">LR Baggs Venue DI Preamp</p>
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
export default withRouter(LRBaggsVenueCard)