import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const SchecterGuitarStudioBassCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$849.99</h2>
                <div className="card-body">
                    <Link to="/schecterguitarstudiobass">
                        <img src={process.env.PUBLIC_URL + '/Basses-images/Schecter Guitar Research Stiletto Studio-4 Fretless Bass Satin Honey.jpg'} alt="bass" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Schecter Guitar Studio-4</p>
                    <FiveStars />

                    <div class="col text-center">
                        <Link to="/schecterguitarstudiobass" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(SchecterGuitarStudioBassCard)