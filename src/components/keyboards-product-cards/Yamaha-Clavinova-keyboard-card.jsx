import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const YamahaClavinovaKeyboardCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$16,999</h2>
                <div className="card-body">
                    <Link to="/yamahaclavinova">
                        <img src={process.env.PUBLIC_URL + '/Keyboards-images/Yamaha Clavinova CVP-809 Digital Grand Piano with Bench Polished White.jpg'} alt="keyboard" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Yamaha Clavinova Grand Piano</p>
                    <ThreeStars />

                    <div class="col text-center">
                        <Link to="/yamahaclavinova" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(YamahaClavinovaKeyboardCard)