import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FiveStars from '../star-ratings/5Star';

const StratocasterHSSCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$809.99</h2>
                <div className="card-body">
                    <img src={process.env.PUBLIC_URL + '/Guitars-images/Fender Player Stratocaster HSS Plus Top Maple Fingerboard Limited-Edition Electric Guitar Blue Burst.jpg'} alt="guitar" className="img-thumbnail" />
                    <p className="card-title">Fender Stratocaster HSS</p>
                    <FiveStars />
                    <p className="review-text text-center">(9 Reviews)</p>
                    <div class="col text-center">
                        <Link className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(StratocasterHSSCard)
