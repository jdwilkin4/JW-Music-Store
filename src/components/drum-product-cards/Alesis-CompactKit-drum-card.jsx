import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const AlesisCompactKitDrumCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$89.99</h2>
                <div className="card-body">
                    <Link to="/alesiscompactkit">
                        <img src={process.env.PUBLIC_URL + '/Drums-images/Alesis CompactKit 4 Electronic Drum Kit.jpg'} alt="drums" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Alesis CompactKit Drums</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/alesiscompactkit" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(AlesisCompactKitDrumCard)