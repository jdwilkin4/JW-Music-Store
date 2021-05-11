import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const SilverCreekBassCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$1,599.99</h2>
                <div className="card-body">
                    <Link to="/silverrockerbass">
                        <img src={process.env.PUBLIC_URL + '/Basses-images/Silver Creek Rocker Upright String Bass Outfit.jpg'} alt="bass" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Silver Creek Rocker Upright</p>
                    <ThreeStars />

                    <div class="col text-center">
                        <Link to="/silverrockerbass" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(SilverCreekBassCard)