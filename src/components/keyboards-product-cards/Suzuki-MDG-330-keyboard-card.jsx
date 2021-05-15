import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const SuzukiMdg330KeyboardCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$2,999.99</h2>
                <div className="card-body">
                    <Link to="/suzukimdg330keyboard">
                        <img src={process.env.PUBLIC_URL + '/Keyboards-images/Suzuki MDG-330 Mini Grand Digital Piano.jpg'} alt="keyboard" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Suzuki MDG-330 Digital Piano</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/suzukimdg330keyboard" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(SuzukiMdg330KeyboardCard)