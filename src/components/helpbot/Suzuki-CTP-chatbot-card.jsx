import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const SuzukiCtpChatbotCard = () => {
    return (
        <div className="card-recommendation">
            <Link to="/suzukictpkeyboard">
                <img src={process.env.PUBLIC_URL + '/Keyboards-images/Suzuki CTP-88 Innovation Digital Piano.jpg'} alt="keyboard" className="img-thumbnail" />
            </Link>
            <div>
                <h2 className="text-center">$1,199.99</h2>
                <p className="card-title">Suzuki CTP-88 Digital Piano</p>
                <FiveStars />
                <div class="col text-center">
                    <Link to="/suzukictpkeyboard" className="btn product-description btn-link">Product info</Link>
                </div>
                <div class="col text-center">
                    <AddToCartBtn />
                </div>
            </div>
        </div>
    )
}
export default withRouter(SuzukiCtpChatbotCard)