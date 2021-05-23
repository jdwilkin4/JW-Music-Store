import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const FenderRumbleChatbotCard = () => {
    return (
        <div className="card-recommendation">
            <Link to="/fenderrumble">
                <img src={process.env.PUBLIC_URL + '/Amps-images/Fender RUMBLE 25 1x8 25W Bass Combo Amp.jpg'} alt="amps" className="img-thumbnail" />
            </Link>
            <div>
                <h2 className="text-center">$119.99</h2>
                <p className="card-title">Fender RUMBLE 25 Amp</p>
                <FiveStars />
                <div class="col text-center">
                    <Link to="/fenderrumble" className="btn product-description btn-link">Product info</Link>
                </div>
                <div class="col text-center">
                    <AddToCartBtn />
                </div>
            </div>
        </div>
    )
}
export default withRouter(FenderRumbleChatbotCard)