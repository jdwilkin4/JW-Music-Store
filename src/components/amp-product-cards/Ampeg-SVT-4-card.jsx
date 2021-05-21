import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const AmpegSVT4Card = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$1,699.99</h2>
                <div className="card-body">
                    <Link to="/ampegsvt4">
                        <img src={process.env.PUBLIC_URL + '/Amps-images/Ampeg SVT-4 PRO Series Bass Head.jpg'} alt="amps" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Ampeg SVT-4 PRO Series</p>
                    <FourStars />
                    <div class="col text-center">
                        <Link to="/ampegsvt4" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(AmpegSVT4Card)