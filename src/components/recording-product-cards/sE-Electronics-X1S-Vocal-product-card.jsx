import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const SeElectronicsX1sVocalCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$199.00</h2>
                <div className="card-body">
                    <Link to="/seelectronicsx1svocal">
                        <img src={process.env.PUBLIC_URL + '/Recording-images/sE Electronics X1S Vocal Pack.jpg'} alt="recording" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">sE Electronics X1S Vocal Pack</p>
                    <ThreeStars />

                    <div class="col text-center">
                        <Link to="/seelectronicsx1svocal" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(SeElectronicsX1sVocalCard)