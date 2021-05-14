import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const DwPerformanceDrumCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$479.99</h2>
                <div className="card-body">
                    <Link to="/dwperformance">
                        <img src={process.env.PUBLIC_URL + '/Drums-images/DW Performance Series Floor Tom Pewter Sparkle 16 x 14 in..jpg'} alt="drums" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">DW Performance Tom</p>
                    <ThreeStars />

                    <div class="col text-center">
                        <Link to="/dwperformance" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(DwPerformanceDrumCard)