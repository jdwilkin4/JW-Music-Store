import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FourStars from '../star-ratings/4Star';


const ElixerGuitarStringsCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$11.99</h2>
                <div className="card-body">
                    <Link to="/elixerguitarstrings">
                        <img src={process.env.PUBLIC_URL + '/Accessories-images/Elixer-Electric-Guitar-Strings.jpg'} alt="accessories" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Elixer Electric Guitar Strings</p>
                    <FourStars />
                    <div class="col text-center">
                        <Link to="/elixerguitarstrings" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(ElixerGuitarStringsCard) 