import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FourStars from '../star-ratings/4Star';

const FenderFa135Card = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$199.99</h2>
                <div className="card-body">
                    <Link to="/fender135" ><img src={process.env.PUBLIC_URL + '/Guitars-images/Fender FA135CE Concert Acoustic Electric Guitar Natural.jpg'} alt="guitar" className="img-thumbnail" /></Link>
                    <p className="card-title">Fender FA-135CE Acoustic-Electric</p>
                    <FourStars />
                    <div class="col text-center">
                        <Link to="/fender135" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(FenderFa135Card);