import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FourStars from '../star-ratings/4Star';

const StratocasterLimitedCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$774.99</h2>
                <div className="card-body">
                    <img src={process.env.PUBLIC_URL + '/Guitars-images/Fender Player Stratocaster Maple Fingerboard Limited Edition Electric Guitar Shell Pink.jpg'} alt="guitar" className="img-thumbnail" />
                    <p className="card-title">Stratocaster Limited Edition</p>
                    <FourStars />
                    <p className="review-text text-center">(4 Reviews)</p>
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
export default withRouter(StratocasterLimitedCard)
