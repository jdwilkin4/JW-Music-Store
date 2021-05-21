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
                    <Link to="/rocketeer">
                        <img src={process.env.PUBLIC_URL + '/Guitars-images/Rogue Rocketeer Electric Guitar Pack Red Burst.jpg'} alt="guitar" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Rogue Rocketeer Guitar Pack </p>
                    <ThreeStars />
                    <div class="col text-center">
                        <Link to="/rocketeer" className="btn product-description btn-link">Product info</Link>
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