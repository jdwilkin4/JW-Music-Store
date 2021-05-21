import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const SeElectronicsX1sStudioCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$249.00</h2>
                <div className="card-body">
                    <Link to="/seelectronicsx1sstudio">
                        <img src={process.env.PUBLIC_URL + '/Recording-images/sE Electronics X1S Studio Bundle.jpg'} alt="recording" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">sE Electronics X1S Studio Bundle</p>
                    <FiveStars />

                    <div class="col text-center">
                        <Link to="/seelectronicsx1sstudio" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(SeElectronicsX1sStudioCard)