import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const IconQconExG2Card = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$569.99</h2>
                <div className="card-body">
                    <Link to="/iconqconexg2">
                        <img src={process.env.PUBLIC_URL + '/Recording-images/Icon Qcon EX G2 Control Surface.jpg'} alt="recording" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Icon Qcon EX G2 Control Surface</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/iconqconexg2" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(IconQconExG2Card)