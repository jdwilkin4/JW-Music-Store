import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FourStars from '../star-ratings/4Star';

const PioneerPlx1000Card = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$699.00</h2>
                <div className="card-body">
                    <Link to="/pioneerplx1000">
                        <img src={process.env.PUBLIC_URL + '/DJ-images/Pioneer PLX-1000 Professional Turntable.jpg'} alt="dj" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Pioneer PLX-1000 Turntable</p>
                    <FourStars />
                    <div class="col text-center">
                        <Link to="/pioneerplx1000" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(PioneerPlx1000Card)