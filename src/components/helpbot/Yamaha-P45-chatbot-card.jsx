import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const YamahaP45ChatbotCard = () => {
    return (
        <div className="card-recommendation">
            <Link to="/yamahap45keyboard">
                <img src={process.env.PUBLIC_URL + '/Keyboards-images/Yamaha P-45 88-Key Weighted Action Digital Piano Black.jpg'} alt="keyboard" className="img-thumbnail" />
            </Link>
            <div>
                <h2 className="text-center">$499.99</h2>
                <p className="card-title">Yamaha P-45 88-Key Piano</p>
                <FiveStars />
                <div class="col text-center">
                    <Link to="/yamahap45keyboard" className="btn product-description btn-link">Product info</Link>
                </div>
                <div class="col text-center">
                    <AddToCartBtn />
                </div>
            </div>
        </div>
    )
}
export default withRouter(YamahaP45ChatbotCard)