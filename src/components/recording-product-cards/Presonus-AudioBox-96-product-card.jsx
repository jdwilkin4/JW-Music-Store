import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const PresonusAudioBox96Card = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$249.99</h2>
                <div className="card-body">
                    <Link to="/presonusaudiobox96">
                        <img src={process.env.PUBLIC_URL + '/Recording-images/Presonus AudioBox 96 Studio Package.jpg'} alt="recording" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Presonus AudioBox 96</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/presonusaudiobox96" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(PresonusAudioBox96Card)