import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const YamahaTrbx305BassCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$399.99</h2>
                <div className="card-body">
                    <Link to="/yamahatrbx305bass" >
                        <img src={process.env.PUBLIC_URL + '/Basses-images/Yamaha TRBX305 5-String Electric Bass Candy Apple Red Rosewood Fretboard.jpg'} alt="bass" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Yamaha TRBX305 5-String</p>
                    <ThreeStars />

                    <div class="col text-center">
                        <Link to="/yamahatrbx305bass" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(YamahaTrbx305BassCard)