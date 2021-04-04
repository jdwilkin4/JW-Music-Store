import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FourStars from '../star-ratings/4Star';


const BraidedCableCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$6.99</h2>
                <div className="card-body">
                    <img src={process.env.PUBLIC_URL + '/Accessories-images/Musicians Gear Braided Instrument Cable Green 1 ft.jpg'} alt="accessories" className="img-thumbnail" />
                    <p className="card-title">Musicians Gear Braided Cable</p>
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
export default withRouter(BraidedCableCard) 