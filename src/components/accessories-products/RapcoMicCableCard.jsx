import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';

const RapcoMicCableCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$59.99</h2>
                <div className="card-body">
                    <img src={process.env.PUBLIC_URL + '/Accessories-images/Rapco RoadHOG XLR Microphone Cable 60 ft.jpg'} alt="accessories" className="img-thumbnail" />
                    <p className="card-title">Rapco RoadHOG XLR Microphone Cable 60 ft</p>
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
export default withRouter(RapcoMicCableCard);