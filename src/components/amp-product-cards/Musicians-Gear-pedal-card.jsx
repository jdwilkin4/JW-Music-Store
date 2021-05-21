import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';


const MusiciansGearPedalCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$114.99</h2>
                <div className="card-body">
                    <Link to="/musiciansgearpedal">
                        <img src={process.env.PUBLIC_URL + '/Amps-images/Musicians Gear Powered Pedal Board and Gig Bag.jpg'} alt="amps" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Musician's Gear Powered Pedal</p>
                    <FourStars />
                    <div class="col text-center">
                        <Link to="/musiciansgearpedal" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(MusiciansGearPedalCard)