import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const SuzukiCtpKeyboardCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$1,199.99</h2>
                <div className="card-body">
                    <Link to="/suzukictpkeyboard">
                        <img src={process.env.PUBLIC_URL + '/Keyboards-images/Suzuki CTP-88 Innovation Digital Piano.jpg'} alt="keyboard" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Suzuki CTP-88 Digital Piano</p>
                    <FiveStars />

                    <div class="col text-center">
                        <Link to="/suzukictpkeyboard" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(SuzukiCtpKeyboardCard)