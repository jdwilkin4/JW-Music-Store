import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const BossDr01SDrumCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$236.99</h2>
                <div className="card-body">
                    <Link to="/bossdr01s">
                        <img src={process.env.PUBLIC_URL + '/Drums-images/Boss DR-01S Rhythm Partner Drum Machine.jpg'} alt="drums" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Boss DR-01S Drum Machine</p>
                    <FiveStars />

                    <div class="col text-center">
                        <Link to="/bossdr01s" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(BossDr01SDrumCard)