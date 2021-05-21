import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FourStars from '../star-ratings/4Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const SterlingMeshPopFilterCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$24.99</h2>
                <div className="card-body">
                    <Link to="/sterlingpopfilter">
                        <img src={process.env.PUBLIC_URL + '/Live-images/Sterling Audio STPF2 Professional Mesh Pop Filter.jpg'} alt="live sound" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Sterling Mesh Pop Filter</p>
                    <FourStars />

                    <div class="col text-center">
                        <Link to="/sterlingpopfilter" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(SterlingMeshPopFilterCard)