import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FourStars from '../star-ratings/4Star';

const NumarkScratchDjMixerCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$499.00</h2>
                <div className="card-body">
                    <Link to="/numarkscratchdjmixer">
                        <img src={process.env.PUBLIC_URL + '/DJ-images/Numark Scratch 2-Channel DJ Mixer for Serato DJ Pro.jpg'} alt="dj" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Numark Scratch DJ Mixer</p>
                    <FourStars />
                    <div class="col text-center">
                        <Link to="/numarkscratchdjmixer" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(NumarkScratchDjMixerCard)