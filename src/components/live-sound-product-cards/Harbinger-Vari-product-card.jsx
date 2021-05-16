import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const HarbingerVariCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$249.99</h2>
                <div className="card-body">
                    <Link to="/harbingervari">
                        <img src={process.env.PUBLIC_URL + '/Live-images/Harbinger VARI V2212 600W 12" Two-Way Loudspeaker.jpg'} alt="live sound" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Harbinger VARI V2212 600W</p>
                    <ThreeStars />

                    <div class="col text-center">
                        <Link to="/harbingervari" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(HarbingerVariCard)