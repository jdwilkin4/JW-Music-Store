import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const Drv200VocalMicCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$59.99</h2>
                <div className="card-body">
                    <Link to="/drv200leadvocalmic">
                        <img src={process.env.PUBLIC_URL + '/Live-images/Digital Reference DRV200 Dynamic Lead Vocal Mic.jpg'} alt="live sound" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">DRV200 Dynamic Lead Vocal Mic</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/drv200leadvocalmic" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Drv200VocalMicCard)