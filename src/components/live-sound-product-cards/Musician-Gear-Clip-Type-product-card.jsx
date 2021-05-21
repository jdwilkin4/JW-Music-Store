import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const MusicianGearClipCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$3.99</h2>
                <div className="card-body">
                    <Link to="/musiciangearclip">
                        <img src={process.env.PUBLIC_URL + '/Live-images/Musician Gear Clip-Type Microphone Holder.jpg'} alt="live sound" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Musician Gear Clip-Type</p>
                    <ThreeStars />

                    <div class="col text-center">
                        <Link to="/musiciangearclip" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(MusicianGearClipCard)