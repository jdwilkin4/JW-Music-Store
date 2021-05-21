import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import ThreeStars from '../star-ratings/3Star';

const GeminiCdmp1500PlayerCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$249.95</h2>
                <div className="card-body">
                    <Link to="/geminicdmp1500player">
                        <img src={process.env.PUBLIC_URL + '/DJ-images/Gemini CDMP 1500 Single 1U CD MP3 USB Player.jpg'} alt="dj" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Gemini CDMP 1500 Player</p>
                    <ThreeStars />
                    <div class="col text-center">
                        <Link to="/geminicdmp1500player" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(GeminiCdmp1500PlayerCard)