import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FiveStars from '../star-ratings/5Star';

const DenonDjSc5000Card = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$749.99</h2>
                <div className="card-body">
                    <Link to="/denondjsc5000">
                        <img src={process.env.PUBLIC_URL + '/DJ-images/Denon DJ SC5000 Prime Professional Media Player.jpg'} alt="dj" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Denon DJ SC5000 Prime</p>
                    <FiveStars />
                    <div class="col text-center">
                        <Link to="/denondjsc5000" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(DenonDjSc5000Card)