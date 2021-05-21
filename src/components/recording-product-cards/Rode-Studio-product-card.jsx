import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const RodeStudioCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$349.00</h2>
                <div className="card-body">
                    <Link to="/rodestudio">
                        <img src={process.env.PUBLIC_URL + '/Recording-images/Rode Complete Studio Kit with NT1 Microphone and AI-1 Interface.jpg'} alt="recording" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Rode Complete Studio Kit</p>
                    <ThreeStars />

                    <div class="col text-center">
                        <Link to="/rodestudio" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(RodeStudioCard)