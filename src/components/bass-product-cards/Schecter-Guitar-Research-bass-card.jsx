import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const SchecterGuitarResearchBassCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$899.99</h2>
                <div className="card-body">
                    <Link to="/schecterresearchbass">
                        <img src={process.env.PUBLIC_URL + '/Basses-images/Schecter Guitar Research Stiletto Session-5 Fretless Electric Bass Satin Aged Natural.jpg'} alt="bass" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Schecter Guitar Research Stiletto</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/schecterresearchbass" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(SchecterGuitarResearchBassCard)