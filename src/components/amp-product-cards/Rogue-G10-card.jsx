import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import ThreeStars from '../star-ratings/3Star';


const RogueG10AmpCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$44.99</h2>
                <div className="card-body">
                    <Link to="/rogueg10amp">
                        <img src={process.env.PUBLIC_URL + '/Amps-images/Rogue G10 10W 1x5 Guitar Combo Amp Black.jpg'} alt="amps" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Rogue G10 10W Amp</p>
                    <ThreeStars />
                    <div class="col text-center">
                        <Link to="/rogueg10amp" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(RogueG10AmpCard)