import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FiveStars from '../star-ratings/5Star';

const GuildOM240CECard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$499.99</h2>
                <div className="card-body">
                    <Link to="/GuildOM240CE">
                        <img src={process.env.PUBLIC_URL + '/Guitars-images/Guild OM-240CE Orchestra Acoustic-Electric Guitar Charcoal Burst.jpg'} alt="guitar" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Guild OM-240CE Acoustic-Electric</p>
                    <FiveStars />
                    <div class="col text-center">
                        <Link to="/GuildOM240CE" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(GuildOM240CECard)