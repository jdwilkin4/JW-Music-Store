import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const IbanezGsrm20BassCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$179.99</h2>
                <div className="card-body">
                    <Link to="/ibanezgsrm20bass">
                        <img src={process.env.PUBLIC_URL + '/Basses-images/Ibanez GSRM20 Mikro Short-Scale Bass Guitar Starlight Blue.jpg'} alt="bass" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Ibanez GSRM20 Mikro Short-Scale</p>
                    <ThreeStars />

                    <div class="col text-center">
                        <Link to="/ibanezgsrm20bass" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default withRouter(IbanezGsrm20BassCard)