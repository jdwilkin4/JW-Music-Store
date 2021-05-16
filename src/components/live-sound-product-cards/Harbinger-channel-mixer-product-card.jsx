import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const HarbingerChannelMixerCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$249.99</h2>
                <div className="card-body">
                    <Link to="/harbinger14mixer">
                        <img src={process.env.PUBLIC_URL + '/Live-images/Harbinger L1402FX-USB 14-Channel Mixer With Digital Effects and USB.jpg'} alt="live sound" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Harbinger 14-Channel Mixer</p>
                    <FiveStars />

                    <div class="col text-center">
                        <Link to="/harbinger14mixer" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(HarbingerChannelMixerCard)