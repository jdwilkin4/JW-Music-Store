import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FourStars from '../star-ratings/4Star';

const RoadRunnerBagCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$149.99</h2>
                <div className="card-body">
                    <img src={process.env.PUBLIC_URL + '/Accessories-images/Road Runner 5-Piece Fusion Drum Bag Set Black.jpg'} alt="accessories" className="img-thumbnail" />
                    <p className="card-title">Road Runner Drum Bag Set</p>
                    <FourStars />
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
export default withRouter(RoadRunnerBagCard)