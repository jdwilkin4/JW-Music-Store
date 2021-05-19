import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import ThreeStars from '../star-ratings/3Star';

const Pioneer4ChannelMixerCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$2,199.00</h2>
                <div className="card-body">
                    <Link to="/pioneer4channelmixer">
                        <img src={process.env.PUBLIC_URL + '/DJ-images/Pioneer DJM-900NXS2 Professional 4-Channel Digital DJ Mixer with Dual USB for Serato, Traktor and rekordbox.jpg'} alt="dj" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Pioneer 4-Channel Mixer</p>
                    <ThreeStars />
                    <div class="col text-center">
                        <Link to="/pioneer4channelmixer" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Pioneer4ChannelMixerCard)