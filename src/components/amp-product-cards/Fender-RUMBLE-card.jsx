import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const FenderRUMBLECard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$119.99</h2>
                <div className="card-body">
                    <Link to="/fenderrumble">
                        <img src={process.env.PUBLIC_URL + '/Amps-images/Fender RUMBLE 25 1x8 25W Bass Combo Amp.jpg'} alt="amps" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Fender RUMBLE 25 Amp</p>
                    <FiveStars />
                    <div class="col text-center">
                        <Link to="/fenderrumble" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(FenderRUMBLECard)