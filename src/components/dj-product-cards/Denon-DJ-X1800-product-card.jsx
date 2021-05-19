import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FiveStars from '../star-ratings/5Star';

const DenonDjX1800Card = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$899.99</h2>
                <div className="card-body">
                    <Link to="/denondjx1800">
                        <img src={process.env.PUBLIC_URL + '/DJ-images/Denon DJ X1800 Prime 4-Channel Club Mixer.jpg'} alt="dj" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Denon DJ X1800 Prime</p>
                    <FiveStars />
                    <div class="col text-center">
                        <Link to="/denondjx1800" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(DenonDjX1800Card)