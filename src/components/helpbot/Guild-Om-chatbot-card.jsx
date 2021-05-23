import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const GuildOmChatbotCard = () => {
    return (

        <div className="card-recommendation">
            <Link to="/GuildOM240CE">
                <img src={process.env.PUBLIC_URL + '/Guitars-images/Guild OM-240CE Orchestra Acoustic-Electric Guitar Charcoal Burst.jpg'} alt="guitar" className="img-thumbnail" />
            </Link>
            <div>
                <h2 className="text-center">$499.99</h2>
                <p className="card-title">Guild OM-240CE Acoustic-Electric</p>
                <FiveStars />
                <div class="col text-center">
                    <Link to="/GuildOM240CE" className="btn product-description btn-link">Product info</Link>
                </div>
                <div class="col text-center">
                    <AddToCartBtn />
                </div>
            </div>
        </div>

    )
}
export default withRouter(GuildOmChatbotCard)