import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';


const TCElectronicLoopCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$98.99</h2>
                <div className="card-body">
                    <Link to="/tcelectroniclooper">
                        <img src={process.env.PUBLIC_URL + '/Amps-images/TC Electronic Ditto Looper Guitar Effects Pedal.jpg'} alt="amps" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">TC Electronic Ditto Looper</p>
                    <ThreeStars />
                    <div class="col text-center">
                        <Link to="/tcelectroniclooper" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(TCElectronicLoopCard)