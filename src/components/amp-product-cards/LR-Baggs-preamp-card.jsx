import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';


const LRBaggsPreampCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$199.99</h2>
                <div className="card-body">
                    <img src={process.env.PUBLIC_URL + '/Amps-images/LR Baggs Para Acoustic Guitar DI and Preamp.jpg'} alt="amps" className="img-thumbnail" />
                    <p className="card-title">LR Baggs Para Guitar Preamp</p>
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
export default withRouter(LRBaggsPreampCard)