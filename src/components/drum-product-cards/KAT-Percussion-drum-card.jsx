import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const KatPercussionDrumCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$119.99</h2>
                <div className="card-body">
                    <Link to="/katpercussion">
                        <img src={process.env.PUBLIC_URL + '/Drums-images/KAT Percussion Electronic Drum and Percussion Pad Sound Module.jpg'} alt="drums" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">KAT Percussion Electronic Drum</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/katpercussion" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(KatPercussionDrumCard)