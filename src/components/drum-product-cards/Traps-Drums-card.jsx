import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const TrapsDrumCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$672.99</h2>
                <div className="card-body">
                    <Link to="/trapsdrumsa400">
                        <img src={process.env.PUBLIC_URL + '/Drums-images/Traps Drums A400 Portable Acoustic Drum Set.jpg'} alt="drums" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Traps Drums A400 Portable</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/trapsdrumsa400" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(TrapsDrumCard)