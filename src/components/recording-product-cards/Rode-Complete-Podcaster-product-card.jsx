import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const RodeCompletePodcasterCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$999.99</h2>
                <div className="card-body">
                    <Link to="/rodcompletepodcaster">
                        <img src={process.env.PUBLIC_URL + '/Recording-images/Rode Complete Podcaster Recording Bundle.jpg'} alt="recording" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Rode Complete Podcaster Bundle</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/rodcompletepodcaster" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(RodeCompletePodcasterCard)