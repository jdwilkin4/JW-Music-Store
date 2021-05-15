import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const YamahaP45WithStandCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$629.99</h2>
                <div className="card-body">
                    <Link to="/yamahap45withstand">
                        <img src={process.env.PUBLIC_URL + '/Keyboards-images/Yamaha P-45 Digital Piano With Stand and Bench.jpg'} alt="keyboard" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Yamaha P-45 Piano With Stand</p>
                    <FiveStars />

                    <div class="col text-center">
                        <Link to="/yamahap45withstand" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(YamahaP45WithStandCard)