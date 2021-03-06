import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';


const HeadRushPedalboardCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$999.99</h2>
                <div className="card-body">
                    <Link to="/headrushpedalboard">
                        <img src={process.env.PUBLIC_URL + '/Amps-images/HeadRush Pedalboard Multi-Effects Processor.jpg'} alt="amps" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">HeadRush Pedalboard</p>
                    <FourStars />
                    <div class="col text-center">
                        <Link to="/headrushpedalboard" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(HeadRushPedalboardCard)
