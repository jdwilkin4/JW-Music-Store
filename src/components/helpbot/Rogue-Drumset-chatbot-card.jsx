import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const RogueDrumsetChatbotCard = () => {
    return (
        <div className="card-recommendation">
            <Link to="/rogue5peicedrum">
                <img src={process.env.PUBLIC_URL + '/Drums-images/Rogue 5-Piece Complete Drum Set Black.jpg'} alt="drums" className="img-thumbnail" />
            </Link>
            <div>
                <h2 className="text-center">$349.99</h2>
                <p className="card-title">Rogue 5-Piece Drum Set</p>
                <FiveStars />
                <div class="col text-center">
                    <Link to="/rogue5peicedrum" className="btn product-description btn-link">Product info</Link>
                </div>
                <div class="col text-center">
                    <AddToCartBtn />
                </div>
            </div>
        </div>
    )
}
export default withRouter(RogueDrumsetChatbotCard)