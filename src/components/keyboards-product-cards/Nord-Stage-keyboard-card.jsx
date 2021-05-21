import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const NordStageKeyboardCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$4,699.99</h2>
                <div className="card-body">
                    <Link to="/nordstagekeyboard">
                        <img src={process.env.PUBLIC_URL + '/Keyboards-images/Nord Stage 3 88 Red.jpg'} alt="keyboard" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Nord Stage 3 88 Red</p>
                    <ThreeStars />

                    <div class="col text-center">
                        <Link to="/nordstagekeyboard" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(NordStageKeyboardCard)