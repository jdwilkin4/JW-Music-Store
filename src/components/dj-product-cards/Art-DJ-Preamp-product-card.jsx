import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import ThreeStars from '../star-ratings/3Star';

const ArtDjPreampCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$65.99</h2>
                <div className="card-body">
                    <Link to="/artdjpreamp">
                        <img src={process.env.PUBLIC_URL + '/DJ-images/Art DJ Pre II Phono Preamp.jpg'} alt="dj" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Art DJ Pre II Phono Preamp</p>
                    <ThreeStars />
                    <div class="col text-center">
                        <Link to="/artdjpreamp" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(ArtDjPreampCard)