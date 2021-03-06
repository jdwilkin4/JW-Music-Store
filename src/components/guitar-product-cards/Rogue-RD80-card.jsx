import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FourStars from '../star-ratings/4Star';


const RogueRd80Card = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$99.99</h2>
                <div className="card-body">
                    <Link to="/roguerd80">
                        <img src={process.env.PUBLIC_URL + '/Guitars-images/Rogue RD80 Dreadnought Acoustic Guitar Black.jpg'} alt="guitar" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Rogue RD80 Dreadnought</p>
                    <FourStars />
                    <div class="col text-center">
                        <Link to="/roguerd80" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(RogueRd80Card)
