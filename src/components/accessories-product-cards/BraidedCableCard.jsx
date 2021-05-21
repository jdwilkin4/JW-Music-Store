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
                    <Link to="/musiciansgearbraidedcable">
                        <img src={process.env.PUBLIC_URL + '/Accessories-images/Musicians Gear Braided Instrument Cable Green 1 ft.jpg'} alt="accessories" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Musicians Gear Braided Cable</p>
                    <FourStars />
                    <div class="col text-center">
                        <Link to="/musiciansgearbraidedcable" className="btn product-description btn-link">Product info</Link>
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