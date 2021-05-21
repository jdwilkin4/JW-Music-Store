import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const YamahaAriusKeyboardCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$1,099.99</h2>
                <div className="card-body">
                    <Link to="/yamahaarius">
                        <img src={process.env.PUBLIC_URL + '/Keyboards-images/Yamaha Arius YDP-144 Digital Console Piano Black.jpg'} alt="keyboard" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Yamaha Arius Piano</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/yamahaarius" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(YamahaAriusKeyboardCard)