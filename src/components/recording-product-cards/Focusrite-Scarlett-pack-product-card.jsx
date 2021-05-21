import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const FocusriteScarlettPackCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$229.99</h2>
                <div className="card-body">
                    <Link to="/focusritescarlettpack">
                        <img src={process.env.PUBLIC_URL + '/Recording-images/Focusrite Scarlett Solo Studio Pack (Gen 3).jpg'} alt="recording" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Focusrite Scarlett Solo Studio Pack</p>
                    <FiveStars />

                    <div class="col text-center">
                        <Link to="/focusritescarlettpack" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(FocusriteScarlettPackCard)