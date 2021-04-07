import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';


const DigitechTrioCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$354.99</h2>
                <div className="card-body">
                    <img src={process.env.PUBLIC_URL + '/Amps-images/Digitech Trio+ Band Creator Plus Looper Guitar Effects Pedal.jpg'} alt="amps" className="img-thumbnail" />
                    <p className="card-title">Digitech Trio+ Band Creator</p>
                    <FourStars />
                    <p className="review-text text-center">(4 Reviews)</p>
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
export default withRouter(DigitechTrioCard)