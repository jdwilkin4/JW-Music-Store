import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';


const GatorGPTPWRCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$164.99</h2>
                <div className="card-body">
                    <Link to="/gatorgptpwr">
                        <img src={process.env.PUBLIC_URL + '/Amps-images/Gator GPT-PWR Powered Pedal Tote Pedal Board with Carry Bag Black.jpg'} alt="amps" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Gator GPT-PWR Powered Pedal</p>
                    <ThreeStars />
                    <div class="col text-center">
                        <Link to="/gatorgptpwr" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(GatorGPTPWRCard)