import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const Mxl990MicCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$74.99</h2>
                <div className="card-body">
                    <Link to="/mxl990mic">
                        <img src={process.env.PUBLIC_URL + '/Live-images/MXL 990 Condenser Microphone With Shockmount.jpg'} alt="live sound" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">MXL 990 Microphone</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/mxl990mic" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Mxl990MicCard)