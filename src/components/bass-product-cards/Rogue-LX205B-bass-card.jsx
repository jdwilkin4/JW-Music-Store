import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const RogueLx205BassCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$179.99</h2>
                <div className="card-body">
                    <Link to="/roguelx205bass">
                        <img src={process.env.PUBLIC_URL + '/Basses-images/Rogue LX205B 5-String Series III Electric Bass Guitar Candy Apple Red.jpg'} alt="bass" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Rogue LX205B 5-String</p>
                    <FiveStars />

                    <div class="col text-center">
                        <Link to="/roguelx205bass" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default withRouter(RogueLx205BassCard)
