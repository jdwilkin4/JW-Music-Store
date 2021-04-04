import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FourStars from '../star-ratings/4Star';


const FingereaseGuitarStringCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$4.99</h2>
                <div className="card-body">
                    <img src={process.env.PUBLIC_URL + '/Accessories-images/Fingerease Guitar String Lubricant.jpg'} alt="accessories" className="img-thumbnail" />
                    <p className="card-title">Fingerease Guitar String Lubricant</p>
                    <FourStars />
                    <Link>
                        <p className="review-text text-center">(6 Reviews)</p>
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
export default withRouter(FingereaseGuitarStringCard)