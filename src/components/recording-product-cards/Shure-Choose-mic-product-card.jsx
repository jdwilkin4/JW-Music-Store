import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const ShureChooseMicCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$499.99</h2>
                <div className="card-body">
                    <Link to="/shurechoosemic">
                        <img src={process.env.PUBLIC_URL + '/Recording-images/Shure Choose Your Microphone Bundle SM81.jpg'} alt="recording" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Shure Choose Your Mic Bundle</p>
                    <ThreeStars />

                    <div class="col text-center">
                        <Link to="/shurechoosemic" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(ShureChooseMicCard)