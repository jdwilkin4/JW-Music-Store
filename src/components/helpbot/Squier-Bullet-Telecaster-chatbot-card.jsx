import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const SquierBulletTelecasterChatbotCard = () => {
    return (
        <div className="card-recommendation">
            <Link to="/squierbullettelecaster">
                <img src={process.env.PUBLIC_URL + '/Guitars-images/Squier Bullet Telecaster Limited Edition Electric Guitar Surf Green.jpg'} alt="guitar" className="img-thumbnail" />
            </Link>
            <div>
                <h2 className="text-center">$179.99</h2>
                <p className="card-title">Squier Bullet Telecaster</p>
                <FiveStars />
                <div class="col text-center">
                    <Link to="/squierbullettelecaster" className="btn product-description btn-link">Product info</Link>
                </div>
                <div class="col text-center">
                    <AddToCartBtn />
                </div>
            </div>
        </div>
    )
}
export default withRouter(SquierBulletTelecasterChatbotCard)