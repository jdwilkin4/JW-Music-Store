import React from 'react';
import { Citation, FourStars, OrderTemplate, InStock } from '../component-exports';
import { SquierBulletCard, GuildOM240CECard, RogueRocketeerCard, GLLimitedCard, fourStarReview } from '../component-exports';
import { DrBeatCard, DeluxeCaseCard, BraidedCableCard, FenderGuitarStandCard, FreeShipping } from '../component-exports';
import fender135 from './fender135-product-specs';

const FenderFA135CEPage = () => {
    return (
        <div>
            <h1 className="text-center sub-page-heading">Fender FA-135CE Concert Acoustic-Electric Guitar Natural</h1>
            <div className="product-row">
                <div className="review-row">
                    <p className="product-row"><FourStars />(3 Reviews)</p>
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
            <div className="card-title">
                <p>
                    Accessible, versatile guitar perfect for beginners.
                    The Fender FA-135CE Concert Acoustic Guitar is built on the concert-style platform for a sleek, modern design. The laminated spruce top features X-bracing for bright, punchy tone, ideal for lead guitar. The neck is nato, and the back and sides are
                    laminated basswood-both tonewoods known for letting the mid and high frequencies sing out.
                </p>
                <p>The FA-135CE is fashioned with a gloss polyurethane finish, aged fretboard and body bindings, and a white concentric ring rosette that offers a striking contrast, and an appearance as beautiful as its sound.</p>
                <p>Case sold separately.</p>
                <Citation />
            </div>
            <h2 className="text-center product-page-heading">Features</h2>
            <div className="specs">
                {fender135.map((spec, index) => (
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
                    <SquierBulletCard />
                    <GuildOM240CECard />
                    <RogueRocketeerCard />
                    <GLLimitedCard />
                </div>
            </div>
            <h2 className="text-center product-page-heading">Reviews</h2>
            <div className="card-body">
                {fourStarReview.map((review, index) => (
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
                    <DrBeatCard />
                    <BraidedCableCard />
                    <FenderGuitarStandCard />
                    <DeluxeCaseCard />
                </div>
            </div>
            <FreeShipping />
        </div>
    )
}
export default FenderFA135CEPage