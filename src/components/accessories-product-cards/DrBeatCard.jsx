import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import ThreeStars from '../star-ratings/3Star';


const DrBeatCard = () => {
    return (

        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$130.89</h2>
                <div className="card-body">
                    <Link to="/bossdb90drbeat">
                        <img src={process.env.PUBLIC_URL + '/Accessories-images/Boss DB-90 Dr. Beat Metronome.jpg'} alt="accessories" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Boss DB-90 Dr. Beat Metronome</p>
                    <ThreeStars />
                    <div class="col text-center">
                        <Link to="/bossdb90drbeat" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>


    )
}
export default withRouter(DrBeatCard);