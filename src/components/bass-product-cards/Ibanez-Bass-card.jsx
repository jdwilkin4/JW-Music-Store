import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const IbanezBassCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$749.99</h2>
                <div className="card-body">
                    <Link to="/ibanezbass">
                        <img src={process.env.PUBLIC_URL + '/Basses-images/Ibanez Bass Workshop SRH505F Fretless 5-String Electric Bass Flat Natural Browned Burst.jpg'} alt="bass" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Ibanez Bass SRH505F</p>
                    <FiveStars />

                    <div class="col text-center">
                        <Link to="/ibanezbass" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(IbanezBassCard)