import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const CremonaUprightBassChatbotCard = () => {
    return (
        <div className="card-recommendation">
            <Link to="/cremonasb3bass">
                <img src={process.env.PUBLIC_URL + '/Basses-images/Cremona SB-3 Upright Bass.jpg'} alt="bass" className="img-thumbnail" />
            </Link>
            <div>
                <h2 className="text-center">$1,499.99</h2>
                <p className="card-title">Cremona SB-3 Upright Bass 3/4</p>
                <FiveStars />
                <div class="col text-center">
                    <Link to="/cremonasb3bass" className="btn product-description btn-link">Product info</Link>
                </div>
                <div class="col text-center">
                    <AddToCartBtn />
                </div>
            </div>
        </div>
    )
}
export default withRouter(CremonaUprightBassChatbotCard)