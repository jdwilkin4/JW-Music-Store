import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FourStars from '../star-ratings/4Star';

const SquierBulletTelecasterCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$179.99</h2>
                <div className="card-body">
                    <img src={process.env.PUBLIC_URL + '/Guitars-images/Squier Bullet Telecaster Limited Edition Electric Guitar Surf Green.jpg'} alt="guitar" className="img-thumbnail" />
                    <p className="card-title">Squier Bullet Telecaster Limited Edition</p>
                    <FourStars />
                    <Link>
                        <p className="review-text text-center">(3 Reviews)</p>
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
export default withRouter(SquierBulletTelecasterCard)