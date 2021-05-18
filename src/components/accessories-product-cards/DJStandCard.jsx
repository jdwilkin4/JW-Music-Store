import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FourStars from '../star-ratings/4Star';


const DJStandCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$59.99</h2>
                <div className="card-body">
                    <Link to="/drprodjstand">
                        <img src={process.env.PUBLIC_URL + '/Accessories-images/DR-Pro-DJ-Laptop-Stand.jpg'} alt="accessories" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">DR-Pro-DJ-Laptop-Stand</p>
                    <FourStars />
                    <div class="col text-center">
                        <Link to="/drprodjstand" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(DJStandCard)