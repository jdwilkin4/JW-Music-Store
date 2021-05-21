import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AddToCartBtn from '../product-card-templates/AddToCart';
import ThreeStars from '../star-ratings/3Star';

const DAngelicoCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$749.99</h2>
                <div className="card-body">
                    <Link to="/angelico"> <img src={process.env.PUBLIC_URL + '/Guitars-images/DAngelico Premier Series EXL1 Hollowbody Electric Guitar with Stairstep Tailpiece Transparent Wine.jpg'} alt="guitar" className="img-thumbnail" /></Link>
                    <p className="card-title">D'Angelico Premier Series</p>
                    <ThreeStars />
                    <div class="col text-center">
                        <Link className="btn product-description btn-link" to="/angelico">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(DAngelicoCard)