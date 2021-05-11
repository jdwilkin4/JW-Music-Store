import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const CremonaSb3BassCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$1,499.99</h2>
                <div className="card-body">
                    <Link to="/cremonasb3bass">
                        <img src={process.env.PUBLIC_URL + '/Basses-images/Cremona SB-3 Upright Bass.jpg'} alt="bass" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Cremona SB-3 Upright Bass 3/4</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/cremonasb3bass" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(CremonaSb3BassCard) 