import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const WilliamsOvertureKeyboardCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$849.99</h2>
                <div className="card-body">
                    <Link to="/williamsoverturekeyboard">
                        <img src={process.env.PUBLIC_URL + '/Keyboards-images/Williams Overture 2 88-Key Console Digital Piano and Williams WPB Piano Bench Kit Black.jpg'} alt="keyboard" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Williams Overture Digital Piano</p>
                    <ThreeStars />

                    <div class="col text-center">
                        <Link to="/williamsoverturekeyboard" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(WilliamsOvertureKeyboardCard)