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
                    <Link to="/lrbaggsvenue">
                        <img src={process.env.PUBLIC_URL + '/Amps-images/LR Baggs Venue DI Acoustic Guitar Direct Box and Preamp.jpg'} alt="amps" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">LR Baggs Venue DI Preamp</p>
                    <FiveStars />
                    <div class="col text-center">
                        <Link to="/lrbaggsvenue" className="btn product-description btn-link">Product info</Link>
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