import React from 'react';
import { Link, withRouter } from "react-router-dom";
import ThreeStars from '../star-ratings/3Star';
import AddToCartBtn from '../product-card-templates/AddToCart';

const ZoomHandyVideoRecorderCard = () => {
    return (
        <div className="col">
            <div className="card">
                <h2 className="card-header text-center">$219.99</h2>
                <div className="card-body">
                    <Link to="/zoomhandyvideo">
                        <img src={process.env.PUBLIC_URL + '/Recording-images/Zoom handy video recorder.jpg'} alt="recording" className="img-thumbnail" />
                    </Link>
                    <p className="card-title">Zoom handy video recorder</p>
                    <ThreeStars />

                    <div class="col text-center">
                        <Link to="/zoomhandyvideo" className="btn product-description btn-link">Product info</Link>
                    </div>
                    <div class="col text-center">
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(ZoomHandyVideoRecorderCard)