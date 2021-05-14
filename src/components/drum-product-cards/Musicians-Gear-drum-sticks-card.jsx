import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const MusicianGearDrumStickCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$29.99</h2>
                <div className="card-body">
                    <Link to="/musiciansgearsticks">
                        <img src={process.env.PUBLIC_URL + '/Drums-images/Musicians Gear Hickory Drum Sticks 10-Pack.jpg'} alt="drums" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Musician's Gear Hickory Sticks</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/musiciansgearsticks" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(MusicianGearDrumStickCard)