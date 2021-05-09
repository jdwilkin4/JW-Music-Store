import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import FourStars from '../star-ratings/4Star';

const SquierAffinityCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$249.99</h2>
                <div className="card-body">
                    <Link to="/squieraffinity">
                        <img src={process.env.PUBLIC_URL + '/Guitars-images/Squier Affinity Telecaster HH Electric Guitar with Matching Headstock Metallic Orange.jpg'} alt="guitar" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Squier Affinity Telecaster HH</p>
                    <FourStars />
                    <div class="col text-center">
                        <Link to="/squieraffinity" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(SquierAffinityCard)
