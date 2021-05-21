import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const SterlingStingRayBassCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$299.99</h2>
                <div className="card-body">
                    <Link to="/sterlingstringraybass">
                        <img src={process.env.PUBLIC_URL + '/Basses-images/Sterling by Music Man StingRay Ray4 Electric Bass Vintage Cream White Pickguard.jpg'} alt="bass" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Sterling by Music Man StingRay</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/sterlingstringraybass" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(SterlingStingRayBassCard)