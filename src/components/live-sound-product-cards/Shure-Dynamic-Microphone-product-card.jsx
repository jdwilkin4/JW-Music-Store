import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const ShureDynamicMicCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$399.99</h2>
                <div className="card-body">
                    <Link to="/shuredynamicmic">
                        <img src={process.env.PUBLIC_URL + '/Live-images/Shure SM7B Cardioid Dynamic Microphone.jpg'} alt="live sound" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Shure Dynamic Microphone</p>
                    <ThreeStars />

                    <div class="col text-center">
                        <Link to="/shuredynamicmic" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(ShureDynamicMicCard)