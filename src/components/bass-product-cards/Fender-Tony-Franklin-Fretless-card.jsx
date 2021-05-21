import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const FenderFretlessBassCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$1,999.99</h2>
                <div className="card-body">
                    <Link to="/fenderfretlessbass">
                        <img src={process.env.PUBLIC_URL + '/Basses-images/Fender Tony Franklin Fretless Precision Bass 3-Color Sunburst.jpg'} alt="bass" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Fender Tony Franklin Fretless</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/fenderfretlessbass" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(FenderFretlessBassCard)