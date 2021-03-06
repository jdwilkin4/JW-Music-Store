import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import ThreeStars from '../star-ratings/3Star';


const FenderGuitarStandCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$39.99</h2>
                <div className="card-body">
                    <Link to="/fenderdeluxeguitarstand">
                        <img src={process.env.PUBLIC_URL + '/Accessories-images/Fender Deluxe Hanging Guitar Stand.jpg'} alt="accessories" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Fender Deluxe Guitar Stand</p>
                    <ThreeStars />
                    <div class="col text-center">
                        <Link to="/fenderdeluxeguitarstand" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(FenderGuitarStandCard)