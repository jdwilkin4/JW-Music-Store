import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const SimmonsSd600DrumCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$549.99</h2>
                <div className="card-body">
                    <Link to="/simmonssd600">
                        <img src={process.env.PUBLIC_URL + '/Drums-images/Simmons SD600 Electronic Drum Set With Mesh Heads and Bluetooth.jpg'} alt="drums" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Simmons SD600 Drum Set</p>
                    <ThreeStars />

                    <div class="col text-center">
                        <Link to="/simmonssd600" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(SimmonsSd600DrumCard)