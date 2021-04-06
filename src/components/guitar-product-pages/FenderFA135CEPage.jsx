import React from 'react';
import OrderTemplate from '../OrderTemplate';
import InStock from '../InStock';
import { Citation, ThreeStars } from '../component-exports';

const FenderFA135CEPage = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Fender FA-135CE Concert Acoustic-Electric Guitar Natural</h1>
            <div className="product-row">
                <div className="review-row">
                    <p className="product-row"><ThreeStars />(3 Reviews)</p>
                </div>
            </div>
            <div className="product-row">
                <img src={process.env.PUBLIC_URL + '/Guitars-images/Fender FA135CE Concert Acoustic Electric Guitar Natural.jpg'} alt="guitar" className="product-img-page" />
                <div className="product-column">
                    <h2 className="product-price text-center">$199.99</h2>
                    <InStock />
                    <OrderTemplate />
                </div>
            </div>
            <h2 className="text-center product-page-heading">Overview</h2>
            <p className="card-title">
                D’Angelico's flagship archtop returns in the all-new Premier Series.
                Crafted from John D’Angelico’s original design, the Premier EXL-1's balanced, organic tone recalls the sound of a classic New York jazz box. Couple that with signature D'Angelico
                features in the Stairstep tailpiece, Skyscraper truss rod cover, and iconic headstock, the EXL-1 embodies elegance. Its single floating mini-humbucker highlights its naturally punchy mids and warm acoustic edge.
                Designed for jazz players worldwide, the Premier EXL-1 is a staple. Includes gig bag.
                <Citation />
            </p>

        </div>
    )
}
export default FenderFA135CEPage