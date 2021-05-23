import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const PedaltrainNanoChatbotCard = () => {
    return (

        <div className="card-recommendation">
            <Link to="/pedaltrainnanopedal">
                <img src={process.env.PUBLIC_URL + '/Amps-images/Pedaltrain Nano Pedal Board with Soft Case Black.jpg'} alt="amps" className="img-thumbnail" />
            </Link>
            <div>
                <h2 className="text-center">$69.99</h2>
                <p className="card-title">Pedaltrain Nano Pedal Board </p>
                <FiveStars />
                <div class="col text-center">
                    <Link to="/pedaltrainnanopedal" className="btn product-description btn-link">Product info</Link>
                </div>
                <div class="col text-center">
                    <AddToCartBtn />
                </div>
            </div>
        </div>
    )
}
export default withRouter(PedaltrainNanoChatbotCard)