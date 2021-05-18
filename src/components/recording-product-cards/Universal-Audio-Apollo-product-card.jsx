import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const UniversalAudioApolloCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$899.00</h2>
                <div className="card-body">
                    <Link to="/universalaudio">
                        <img src={process.env.PUBLIC_URL + '/Recording-images/Universal Audio Apollo Twin X DUO Thunderbolt 3 Audio Interface.jpg'} alt="recording" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Universal Audio Apollo Twin X</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/universalaudio" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(UniversalAudioApolloCard)