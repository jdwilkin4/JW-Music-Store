import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const RolandDp603KeyboardCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$2,699.99</h2>
                <div className="card-body">
                    <Link to="/rolanddp603keyboard">
                        <img src={process.env.PUBLIC_URL + '/Keyboards-images/Roland DP603 Digital Home Piano Contemporary Black.jpg'} alt="keyboard" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Roland DP603 Digital Piano</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/rolanddp603keyboard" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(RolandDp603KeyboardCard)