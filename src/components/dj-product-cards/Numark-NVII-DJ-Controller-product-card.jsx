import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FourStars from '../star-ratings/4Star';

const NumarkNv2DjCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$699.00</h2>
                <div className="card-body">
                    <Link to="/numarknv2dj">
                        <img src={process.env.PUBLIC_URL + '/DJ-images/Numark NVII DJ Controller.jpg'} alt="dj" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Numark NVII DJ Controller</p>
                    <FourStars />
                    <div class="col text-center">
                        <Link to="/numarknv2dj" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(NumarkNv2DjCard)