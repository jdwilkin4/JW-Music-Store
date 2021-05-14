import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const YamahaStageDrumCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$119.99</h2>
                <div className="card-body">
                    <Link to="/yamahastagesnare">
                        <img src={process.env.PUBLIC_URL + '/Drums-images/Yamaha Stage Custom Birch Snare 14x5.5" 14 x 5.5 in. Natural Wood.jpg'} alt="drums" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Yamaha Stage Custom Snare</p>
                    <ThreeStars />

                    <div class="col text-center">
                        <Link to="/yamahastagesnare" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(YamahaStageDrumCard)