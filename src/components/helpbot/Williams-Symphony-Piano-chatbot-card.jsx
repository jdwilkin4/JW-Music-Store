import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const WilliamsSymphonyChatbotCard = () => {
    return (
        <div className="card-recommendation">
            <Link to="/williamssymphonykeyboard">
                <img src={process.env.PUBLIC_URL + '/Keyboards-images/Williams Symphony Grand Digital Piano with Bench Mahogany Red.jpg'} alt="keyboard" className="img-thumbnail" />
            </Link>
            <div>
                <h2 className="text-center">$1,799.99</h2>
                <p className="card-title">Williams Symphony Piano</p>
                <FiveStars />
                <div class="col text-center">
                    <Link to="/williamssymphonykeyboard" className="btn product-description btn-link">Product info</Link>
                </div>
                <div class="col text-center">
                    <AddToCartBtn />
                </div>
            </div>
        </div>
    )
}
export default withRouter(WilliamsSymphonyChatbotCard)