import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const KorgB2spKeyboardCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$599.99</h2>
                <div className="card-body">
                    <Link to="/korgb2spkeyboard">
                        <img src={process.env.PUBLIC_URL + '/Keyboards-images/Korg B2SP 88-Key Digital Piano with Stand Black.jpg'} alt="keyboard" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Korg B2SP 88-Key Digital Piano</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/korgb2spkeyboard" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(KorgB2spKeyboardCard)