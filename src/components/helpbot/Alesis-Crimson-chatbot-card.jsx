import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const AlesisCrimsonChatobotCard = () => {
    return (
        <div className="card-recommendation">
            <Link to="/alesiscrimson">
                <img src={process.env.PUBLIC_URL + '/Drums-images/Alesis Crimson II 5-Piece Electronic Drum Kit.jpg'} alt="drums" className="img-thumbnail" />
            </Link>
            <div>
                <h2 className="text-center">$899.99</h2>
                <p className="card-title">Alesis Crimson Drums</p>
                <FiveStars />
                <div class="col text-center">
                    <Link to="/alesiscrimson" className="btn product-description btn-link">Product info</Link>
                </div>
                <div class="col text-center">
                    <AddToCartBtn />
                </div>
            </div>
        </div>
    )
}
export default withRouter(AlesisCrimsonChatobotCard)