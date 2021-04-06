import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FourStars from '../star-ratings/4Star';

const SquierBulletCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$179.99</h2>
                <div className="card-body">
                    <img src={process.env.PUBLIC_URL + '/Guitars-images/Squier Bullet Mustang HH Limited-Edition Electric Guitar Olympic White.jpg'} alt="guitar" className="img-thumbnail" />
                    <p className="card-title">Squier Bullet Mustang HH</p>
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
export default withRouter(SquierBulletCard)