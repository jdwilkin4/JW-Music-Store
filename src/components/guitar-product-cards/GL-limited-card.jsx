import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FourStars from '../star-ratings/4Star';

const GLLimitedCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$499.99</h2>
                <div className="card-body">
                    <Link to="/glasatguitar">
                        <img src={process.env.PUBLIC_URL + '/Guitars-images/G&L Limited Edition Tribute ASAT Classic Ash Body Electric Guitar Gloss Natural.jpg'} alt="guitar" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">G&amp;L Limited ASAT Classic</p>
                    <FourStars />
                    <div class="col text-center">
                        <Link to="/glasatguitar" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(GLLimitedCard)