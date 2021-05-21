import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FiveStars from '../star-ratings/5Star';


const ClipOnTunerCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$26.99</h2>
                <div className="card-body">
                    <Link to="/snarksupersnarktuner">
                        <img src={process.env.PUBLIC_URL + '/Accessories-images/Snark Super Snark 2 Clip-On Tuner Black.jpg'} alt="accessories" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Snark Super Snark 2 Clip-On Tuner</p>
                    <FiveStars />
                    <div class="col text-center">
                        <Link to="/snarksupersnarktuner" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(ClipOnTunerCard)