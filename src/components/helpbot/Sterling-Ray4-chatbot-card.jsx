import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const SterlingRay4ChatbotCard = () => {
    return (
        <div className="card-recommendation">
            <Link to="/sterlingray4bass">
                <img src={process.env.PUBLIC_URL + '/Basses-images/Sterling by Music Man StingRay Ray4 Maple Fingerboard Electric Bass Satin Vintage Sunburst Black Pickguard.jpg'} alt="bass" className="img-thumbnail" />
            </Link>
            <div>
                <h2 className="text-center">$299.99</h2>
                <p className="card-title">Sterling by Music Man Ray4</p>
                <FiveStars />
                <div class="col text-center">
                    <Link to="/sterlingray4bass" className="btn product-description btn-link">Product info</Link>
                </div>
                <div class="col text-center">
                    <AddToCartBtn />
                </div>
            </div>
        </div>
    )
}
export default withRouter(SterlingRay4ChatbotCard)