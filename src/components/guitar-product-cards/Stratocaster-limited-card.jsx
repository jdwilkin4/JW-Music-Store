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
                    <Link to="/StratocasterLimited">
                        <img src={process.env.PUBLIC_URL + '/Guitars-images/Fender Player Stratocaster Maple Fingerboard Limited Edition Electric Guitar Shell Pink.jpg'} alt="guitar" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Stratocaster Limited Edition</p>
                    <FourStars />
                    <div class="col text-center">
                        <Link to="/StratocasterLimited" className="btn product-description btn-link">Product info</Link>
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
