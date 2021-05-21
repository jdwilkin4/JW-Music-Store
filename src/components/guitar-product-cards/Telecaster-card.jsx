import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FourStars from '../star-ratings/4Star';

const TelecasterCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$749.99</h2>
                <div className="card-body">
                    <Link to="/FenderTelecaster">
                        <img src={process.env.PUBLIC_URL + '/Guitars-images/Fender Player Telecaster Maple Fingerboard Electric Guitar Capri Orange.jpg'} alt="guitar" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Fender Telecaster Capri Orange</p>
                    <FourStars />
                    <div class="col text-center">
                        <Link to="/FenderTelecaster" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(TelecasterCard)