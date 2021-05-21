import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FiveStars from '../star-ratings/5Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const LivewireCableTesterCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$30.99</h2>
                <div className="card-body">
                    <Link to="/livewirecabletester">
                        <img src={process.env.PUBLIC_URL + '/Live-images/Livewire Cable Tester.jpg'} alt="live sound" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Livewire Cable Tester</p>
                    <FiveStars />

                    <div class="col text-center">
                        <Link to="/livewirecabletester" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(LivewireCableTesterCard)