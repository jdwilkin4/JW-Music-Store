import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const PorkPieSnareCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$300.00</h2>
                <div className="card-body">
                    <Link to="/porkpiesnare">
                        <img src={process.env.PUBLIC_URL + '/Drums-images/Pork Pie Exotic Rosewood Zebrawood Snare Drum 14 x 6.5 in..jpg'} alt="drums" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Pork Pie Exotic Snare</p>
                    <ThreeStars />

                    <div class="col text-center">
                        <Link to="/porkpiesnare" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(PorkPieSnareCard)