import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FourStars from '../star-ratings/4Star';

const BbeFjb200XCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$44.99</h2>
                <div className="card-body">
                    <Link to="/bbefjm200xpreamp">
                        <img src={process.env.PUBLIC_URL + '/DJ-images/BBE FJB-200X Phono Preamp.jpg'} alt="dj" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">BBE FJB-200X Phono Preamp</p>
                    <FourStars />
                    <div class="col text-center">
                        <Link to="/bbefjm200xpreamp" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(BbeFjb200XCard)