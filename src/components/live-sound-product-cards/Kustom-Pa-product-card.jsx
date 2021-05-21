import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const KustomPaCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$149.99</h2>
                <div className="card-body">
                    <Link to="/kustompa">
                        <img src={process.env.PUBLIC_URL + '/Live-images/Kustom PA KPX110M 10" Passive Monitor.jpg'} alt="live sound" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Kustom PA KPX110M</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/kustompa" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(KustomPaCard)