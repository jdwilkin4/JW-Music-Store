import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const Line6PodStudioCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$199.99</h2>
                <div className="card-body">
                    <Link to="/line6podstudio">
                        <img src={process.env.PUBLIC_URL + '/Recording-images/Line 6 POD Studio UX2 with POD Farm.jpg'} alt="recording" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Line 6 POD Studio UX2 with POD</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/line6podstudio" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Line6PodStudioCard)