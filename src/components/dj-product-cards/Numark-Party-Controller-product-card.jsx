import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FourStars from '../star-ratings/4Star';

const NumarkPartyControllerCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$119.00</h2>
                <div className="card-body">
                    <Link to="/numarkpartycontroller">
                        <img src={process.env.PUBLIC_URL + '/DJ-images/Numark Party Mix DJ Controller.jpg'} alt="dj" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Numark Party Controller</p>
                    <FourStars />
                    <div class="col text-center">
                        <Link to="/numarkpartycontroller" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(NumarkPartyControllerCard)