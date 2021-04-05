import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FourStars from '../star-ratings/4Star';

const FenderFa135Card = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$199.99</h2>
                <div className="card-body">
                    <img src={process.env.PUBLIC_URL + '/Guitars-images/Fender FA135CE Concert Acoustic Electric Guitar Natural.jpg'} alt="guitar" className="img-thumbnail" />
                    <p className="card-title">Fender FA-135CE Concert Acoustic-Electric</p>
                    <FourStars />
                    <Link>
                        <p className="review-text text-center">(3 Reviews)</p>
                    </Link>
                    <div class="col text-center">
                        <Link className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(FenderFa135Card);