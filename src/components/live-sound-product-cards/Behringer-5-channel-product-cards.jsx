import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const Behringer5ChannelCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$149.99</h2>
                <div className="card-body">
                    <Link to="/behringercompactmixer">
                        <img src={process.env.PUBLIC_URL + '/Live-images/Behringer XENYX 1002B 5-Channel Compact Mixer.jpg'} alt="live sound" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Behringer 5-Channel Mixer</p>
                    <ThreeStars />

                    <div class="col text-center">
                        <Link to="/behringercompactmixer" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Behringer5ChannelCard)