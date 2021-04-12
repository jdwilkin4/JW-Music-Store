import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FiveStars from '../star-ratings/5Star';


const PedaltrainNanoPedalCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$69.99</h2>
                <div className="card-body">
                    <img src={process.env.PUBLIC_URL + '/Amps-images/Pedaltrain Nano Pedal Board with Soft Case Black.jpg'} alt="amps" className="img-thumbnail" />
                    <p className="card-title">Pedaltrain Nano Pedal Board </p>
                    <FiveStars />
                    <p className="review-text text-center">(7 Reviews)</p>
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
export default withRouter(PedaltrainNanoPedalCard)