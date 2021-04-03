import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';

const ClipOnTunerCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$29.99</h2>
                <div className="card-body">
                    <img src={process.env.PUBLIC_URL + '/Accessories-images/Snark Super Snark 2 Clip-On Tuner Black.jpg'} alt="accessories" className="img-thumbnail" />
                    <p className="card-title">Snark Super Snark 2 Clip-On Tuner Black</p>
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
export default withRouter(ClipOnTunerCard)