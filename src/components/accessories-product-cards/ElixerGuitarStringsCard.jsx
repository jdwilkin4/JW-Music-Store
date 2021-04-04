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
                    <img src={process.env.PUBLIC_URL + '/Accessories-images/Elixer-Electric-Guitar-Strings.jpg'} alt="accessories" className="img-thumbnail" />
                    <p className="card-title">Elixer Electric Guitar Strings</p>
                    <FourStars />
                    <Link>
                        <p className="review-text text-center">(5 Reviews)</p>
                    </Link>
                    <div class="col text-center">
                        <Link className="btn product-description btn-link">Details</Link>
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