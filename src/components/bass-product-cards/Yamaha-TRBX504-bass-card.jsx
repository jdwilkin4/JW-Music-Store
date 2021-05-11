import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const YamahaTrbx504BassCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$499.99</h2>
                <div className="card-body">
                    <Link to="/yamahatrbx504bass" >
                        <img src={process.env.PUBLIC_URL + '/Basses-images/Yamaha TRBX504 4-String Premium Electric Bass Transparent Brown Rosewood Fretboard.jpg'} alt="bass" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Yamaha TRBX504 4-String</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/yamahatrbx504bass" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(YamahaTrbx504BassCard)
