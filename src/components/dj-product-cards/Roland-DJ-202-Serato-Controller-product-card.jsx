import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FiveStars from '../star-ratings/5Star';

const RolandDj202SeratoControllerCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$299.99</h2>
                <div className="card-body">
                    <Link to="/rolanddj202">
                        <img src={process.env.PUBLIC_URL + '/DJ-images/Roland DJ-202 Serato DJ Controller.jpg'} alt="dj" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Roland DJ-202 Serato Controller</p>
                    <FiveStars />
                    <div class="col text-center">
                        <Link to="/rolanddj202" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(RolandDj202SeratoControllerCard)