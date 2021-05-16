import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const TascamVocalProcessorCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$439.99</h2>
                <div className="card-body">
                    <Link to="/tascamta1vp">
                        <img src={process.env.PUBLIC_URL + '/Live-images/Tascam TA-1VP Vocal Processor with Antares Auto-Tune.jpg'} alt="live sound" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Tascam TA-1VP Vocal Processor</p>
                    <ThreeStars />

                    <div class="col text-center">
                        <Link to="/tascamta1vp" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(TascamVocalProcessorCard)