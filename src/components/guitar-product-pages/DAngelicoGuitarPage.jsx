import React from 'react';
import ThreeStars from '../star-ratings/3Star';
import OrderTemplate from '../OrderTemplate';
import InStock from '../InStock';
import { StratocasterLimitedCard, GuildOM240CECard, GLLimitedCard, SquierBulletTelecasterCard } from '../component-exports';


const AngelicoGuitar = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">D'Angelico Premier Series EXL-1</h1>
            <div className="product-row">
                <div className="review-row">
                    <p className="product-row"><ThreeStars />(10 Reviews)</p>
                </div>
            </div>
            <div className="product-row">
                <img src={process.env.PUBLIC_URL + '/Guitars-images/DAngelico Premier Series EXL1 Hollowbody Electric Guitar with Stairstep Tailpiece Transparent Wine.jpg'} alt="guitar" className="product-img-page" />
                <div className="product-column">
                    <h2 className="product-price text-center">$749.99</h2>
                    <InStock />
                    <OrderTemplate />
                </div>
            </div>
            <h2 className="text-center sub-page-heading">People Who Viewed This Item Also Viewed</h2>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <StratocasterLimitedCard />
                    <GuildOM240CECard />
                    <GLLimitedCard />
                    <SquierBulletTelecasterCard />
                </div>
            </div>

        </div>
    );
}
export default AngelicoGuitar;