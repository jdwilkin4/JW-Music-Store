import React from 'react';
import ThreeStars from '../star-ratings/3Star';
import OrderTemplate from '../OrderTemplate';
import InStock from '../InStock';
import { Citation, StratocasterLimitedCard, GuildOM240CECard, GLLimitedCard, SquierBulletTelecasterCard } from '../component-exports';
import { DeluxeCaseCard, ElixerGuitarStringsCard, FingereaseGuitarStringCard, BraidedCableCard } from '../component-exports';
import threeStarReview from '../reviews/three-star-reviews';

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
            <blockquote className="card-title">
                D’Angelico's flagship archtop returns in the all-new Premier Series.
                Crafted from John D’Angelico’s original design, the Premier EXL-1's balanced, organic tone recalls the sound of a classic New York jazz box. Couple that with signature D'Angelico
                features in the Stairstep tailpiece, Skyscraper truss rod cover, and iconic headstock, the EXL-1 embodies elegance. Its single floating mini-humbucker highlights its naturally punchy mids and warm acoustic edge.
                Designed for jazz players worldwide, the Premier EXL-1 is a staple. Includes gig bag.
                <Citation />
            </blockquote>

            <h2 className="text-center product-page-heading">Features</h2>
            <h3 className="text-center">Body</h3>
            <div className="review-container product-row">
                <div>
                    <p><span className="bold-text">Body type:</span> Hollowbody</p>
                    <p><span className="bold-text">Body material:</span> Laminated</p>
                    <p><span className="bold-text">Top wood:</span> Spruce</p>
                </div>
                <div>
                    <p><span className="bold-text">Body wood:</span> Maple</p>
                    <p><span className="bold-text">Body finish:</span> Gloss</p>
                    <p><span className="bold-text">Body finish:</span> Right handed</p>
                </div>
            </div>
            <h3 className="text-center">Neck</h3>
            <div className="review-container product-row">
                <div>
                    <p><span className="bold-text">Neck shape:</span> C</p>
                    <p><span className="bold-text">Neck wood:</span> Maple</p>
                    <p><span className="bold-text">Joint:</span> Set-in </p>
                </div>
                <div>
                    <p><span className="bold-text">Scale length:</span> 25.5 in.</p>
                    <p><span className="bold-text">Truss rod: </span> Dual-action</p>
                    <p><span className="bold-text">Neck finish: </span> Gloss</p>
                </div>
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
                    <div className=" product-price review-container" key={index}>
                        <h3>{review.title}</h3>
                        <p>{review.name}</p>
                        <p>{review.message}</p>
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