import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FourStars from '../star-ratings/4Star';

const ArtUsbPhonoCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$99.99</h2>
                <div className="card-body">
                    <Link to="/artusbphono">
                        <img src={process.env.PUBLIC_URL + '/DJ-images/Art USB Phono Plus Project Series.jpg'} alt="dj" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Art USB Phono Plus Series</p>
                    <FourStars />
                    <div class="col text-center">
                        <Link to="/artusbphono" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(ArtUsbPhonoCard)