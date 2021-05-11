import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const Line6HelixCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$1,699.99</h2>
                <div className="card-body">
                    <Link to="/line6helix">
                        <img src={process.env.PUBLIC_URL + '/Amps-images/Line 6 Helix Multi-Effects Guitar Pedal.jpg'} alt="amps" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Line 6 Helix Guitar Pedal</p>
                    <FourStars />
                    <div class="col text-center">
                        <Link to="/line6helix" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Line6HelixCard)