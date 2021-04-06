import React from 'react';
import { ThreeStars, threeStarReview, OrderTemplate, InStock } from '../component-exports'
import { Citation, StratocasterLimitedCard, GuildOM240CECard, GLLimitedCard, SquierBulletTelecasterCard } from '../component-exports';
import { DeluxeCaseCard, ElixerGuitarStringsCard, FingereaseGuitarStringCard, BraidedCableCard } from '../component-exports';
import dAngelico from './guitar-product-specs';

const AngelicoGuitar = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">D'Angelico Premier Series EXL-1</h1>
            <div className="product-row">
                <div className="review-row">
                    <p className="product-row"><ThreeStars />(3 Reviews)</p>
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
            <h2 className="text-center product-page-heading">Overview</h2>
            <p className="card-title">
                D’Angelico's flagship archtop returns in the all-new Premier Series.
                Crafted from John D’Angelico’s original design, the Premier EXL-1's balanced, organic tone recalls the sound of a classic New York jazz box. Couple that with signature D'Angelico
                features in the Stairstep tailpiece, Skyscraper truss rod cover, and iconic headstock, the EXL-1 embodies elegance. Its single floating mini-humbucker highlights its naturally punchy mids and warm acoustic edge.
                Designed for jazz players worldwide, the Premier EXL-1 is a staple. Includes gig bag.
                <Citation />
            </p>

            <h2 className="text-center product-page-heading">Features</h2>
            <div className="specs">
                {dAngelico.map((spec, index) => (
                    <div key={index}>
                        <h3 className="text-center">{spec.title}</h3>
                        <div className="review-container product-row">
                            <div>
                                <p><span className="bold-text">{spec.subtitle1}</span> {spec.description1}</p>
                                <p><span className="bold-text">{spec.subtitle2}</span> {spec.description2}</p>
                                <p><span className="bold-text">{spec.subtitle3}</span> {spec.description3}</p>
                            </div>
                            <div>
                                <p><span className="bold-text">{spec.subtitle4}</span> {spec.description4}</p>
                                <p><span className="bold-text">{spec.subtitle5}</span> {spec.description5}</p>
                                <p><span className="bold-text">{spec.subtitle6}</span> {spec.description6}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <h2 className="text-center product-page-heading">People Who Viewed This Item Also Viewed</h2>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <StratocasterLimitedCard />
                    <GuildOM240CECard />
                    <GLLimitedCard />
                    <SquierBulletTelecasterCard />
                </div>
            </div>
            <h2 className="text-center product-page-heading">Reviews</h2>
            <div className="card-body">
                {threeStarReview.map((review, index) => (
                    <div className="review-container" key={index}>
                        <h3 className="text-center">{review.title}</h3>
                        <p className="text-center">{review.name}</p>
                        <p className="text-center">{review.message}</p>
                    </div>
                ))}
            </div>
            <h2 className="text-center product-page-heading">People Who Bought This Item Also Bought</h2>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <DeluxeCaseCard />
                    <ElixerGuitarStringsCard />
                    <FingereaseGuitarStringCard />
                    <BraidedCableCard />
                </div>
            </div>
        </div>
    );
}
export default AngelicoGuitar;