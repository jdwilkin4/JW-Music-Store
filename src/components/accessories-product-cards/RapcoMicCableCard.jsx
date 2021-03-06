import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import ThreeStars from '../star-ratings/3Star';


const RapcoMicCableCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$59.99</h2>
                <div className="card-body">
                    <Link to="/rapcoroadhogmiccable">
                        <img src={process.env.PUBLIC_URL + '/Accessories-images/Rapco RoadHOG XLR Microphone Cable 60 ft.jpg'} alt="accessories" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Rapco RoadHOG Mic Cable 60 ft</p>
                    <ThreeStars />
                    <div class="col text-center">
                        <Link to="/rapcoroadhogmiccable" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(RapcoMicCableCard);