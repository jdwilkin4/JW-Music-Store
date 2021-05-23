import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const LRBaggsVenueChatbotCard = () => {
    return (
        <div className="card-recommendation">
            <Link to="/lrbaggsvenue">
                <img src={process.env.PUBLIC_URL + '/Amps-images/LR Baggs Venue DI Acoustic Guitar Direct Box and Preamp.jpg'} alt="amps" className="img-thumbnail" />
            </Link>
            <div>
                <h2 className="text-center">$299.99</h2>
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
    )
}
export default withRouter(LRBaggsVenueChatbotCard)