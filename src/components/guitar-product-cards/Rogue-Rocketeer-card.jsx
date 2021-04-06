import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import ThreeStars from '../star-ratings/3Star';

const RogueRocketeerCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$179.99</h2>
                <div className="card-body">
                    <img src={process.env.PUBLIC_URL + '/Guitars-images/Rogue Rocketeer Electric Guitar Pack Red Burst.jpg'} alt="guitar" className="img-thumbnail" />
                    <p className="card-title">Rogue Rocketeer Guitar Pack </p>
                    <ThreeStars />
                    <p className="review-text text-center">(5 Reviews)</p>
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
export default withRouter(RogueRocketeerCard)