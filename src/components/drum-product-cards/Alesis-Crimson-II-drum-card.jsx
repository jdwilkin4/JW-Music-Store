import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const AlesisCrimsonDrumCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$899.99</h2>
                <div className="card-body">
                    <Link to="/alesiscrimson">
                        <img src={process.env.PUBLIC_URL + '/Drums-images/Alesis Crimson II 5-Piece Electronic Drum Kit.jpg'} alt="drums" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Alesis Crimson Drums</p>
                    <FiveStars />

                    <div class="col text-center">
                        <Link to="/alesiscrimson" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default withRouter(AlesisCrimsonDrumCard)