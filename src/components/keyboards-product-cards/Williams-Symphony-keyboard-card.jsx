import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const WilliamsSymphonyKeyboardCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$1,799.99</h2>
                <div className="card-body">
                    <Link to="/williamssymphonykeyboard">
                        <img src={process.env.PUBLIC_URL + '/Keyboards-images/Williams Symphony Grand Digital Piano with Bench Mahogany Red.jpg'} alt="keyboard" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Williams Symphony Piano</p>
                    <FiveStars />

                    <div class="col text-center">
                        <Link to="/williamssymphonykeyboard" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(WilliamsSymphonyKeyboardCard)