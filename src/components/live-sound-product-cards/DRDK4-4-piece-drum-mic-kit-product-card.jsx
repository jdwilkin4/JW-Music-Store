import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const Drdk4PieceDrumMicKitCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$99.99</h2>
                <div className="card-body">
                    <Link to="/drdk4drummickit">
                        <img src={process.env.PUBLIC_URL + '/Live-images/Digital Reference DRDK4 4-Piece Drum Mic Kit.jpg'} alt="live sound" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">DRDK4 4-Piece Drum Mic Kit</p>
                    <ThreeStars />

                    <div class="col text-center">
                        <Link to="/drdk4drummickit" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Drdk4PieceDrumMicKitCard)