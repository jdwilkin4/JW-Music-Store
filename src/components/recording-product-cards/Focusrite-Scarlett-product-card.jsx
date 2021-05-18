import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const FocusriteScarlettCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$169.99</h2>
                <div className="card-body">
                    <Link to="/focusritescarlett">
                        <img src={process.env.PUBLIC_URL + '/Recording-images/Focusrite Scarlett 2i2 USB Audio Interface (Gen 3).jpg'} alt="recording" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Focusrite Scarlett Audio Interface </p>
                    <ThreeStars />

                    <div class="col text-center">
                        <Link to="/focusritescarlett" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(FocusriteScarlettCard)