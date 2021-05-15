import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const YamahaCp73KeyboardCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$1,999.99</h2>
                <div className="card-body">
                    <Link to="/yamahacp73keyboard">
                        <img src={process.env.PUBLIC_URL + '/Keyboards-images/Yamaha CP73 73-Key Digital Stage Piano.jpg'} alt="keyboard" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Yamaha CP73 Piano</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/yamahacp73keyboard" className="btn product-description btn-link">Details</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(YamahaCp73KeyboardCard)