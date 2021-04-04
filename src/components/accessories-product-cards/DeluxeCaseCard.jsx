import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FiveStars from '../star-ratings/5Star';


const DeluxeCaseCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$79.99</h2>
                <div className="card-body">
                    <img src={process.env.PUBLIC_URL + '/Accessories-images/Musicians Gear Deluxe Dreadnought Case Black.jpg'} alt="accessories" className="img-thumbnail" />
                    <p className="card-title">Musician's Gear Deluxe  Case</p>
                    <FiveStars />
                    <Link>
                        <p className="review-text text-center">(7 Reviews)</p>
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
export default withRouter(DeluxeCaseCard)