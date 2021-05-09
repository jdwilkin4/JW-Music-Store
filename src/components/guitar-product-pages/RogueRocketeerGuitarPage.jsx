import React, { useState } from 'react';
import { threeStarReview, OrderTemplate, InStock } from '../component-exports';
import { Citation, StratocasterLimitedCard, SquierBulletCard, GLLimitedCard, RogueRd80Card } from '../component-exports';
import { ElixerGuitarStringsCard, FenderGuitarStandCard, FingereaseGuitarStringCard, RapcoMicCableCard, GuitarWarranty, FreeShipping } from '../component-exports';
import { AddReview, ReviewerList, UpdateReviewForm } from '../component-exports';
import rocketeerGuitarSpecs from './rogue-rocketeer-product-specs';


const RocketeerGuitarPage = () => {
    //initialize state for reviews and edits 
    const [reviewer, setReviewer] = useState(threeStarReview);
    const [editing, setEditing] = useState(false);

    //creating an empty state for the form since we don't know who will be editing it
    const initialFormState = {
        id: null,
        title: '',
        name: '',
        message: ''
    }

    //check to see which review is being edited
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const addReviewer = (review) => {
        review.id = reviewer.length + 1
        setReviewer([...reviewer, review])
    }

    const editReview = review => {
        setEditing(true)
        setCurrentUser({
            id: review.id,
            title: review.title,
            name: review.name,
            message: review.message
        })

    }

    const updateReview = (id, updateReviews) => {
        setEditing(false)
        setReviewer(reviewer.map((review) => (review.id === id ? updateReviews : review)))
    }

    const deleteReview = id => {
        setEditing(false)
        setReviewer(reviewer.filter((review) => review.id !== id))
    }

    return (
        <div>
            <h1 className="text-center sub-page-heading">Rogue Rocketeer Electric Guitar Pack Black</h1>

            <div className="product-row">
                <img src={process.env.PUBLIC_URL + '/Guitars-images/Rogue Rocketeer Electric Guitar Pack Red Burst.jpg'} alt="guitar" className="product-img-page" />
                <div className="product-column">
                    <h2 className="product-price text-center">$179.99</h2>
                    <InStock />
                    <OrderTemplate />
                </div>
            </div>
            <h2 className="text-center product-page-heading">Overview</h2>
            <p className="card-title">
                The Rocketeer RR100 is Rogue's take on a classic design, built for ease of playability. It is constructed with a lightweight contoured double-cutaway paulownia body. The ultra-thin, comfortable bolt-on maple neck makes it easy to fly up and down the 22-fret fingerboard with ease.
                The humbucker/dual single-coil pickup configuration with a 5-way switch allows for a wide-variety of tones. A 6-screw vintage tremolo lets you have tons of whammy bar fun, while die-cast tuners ensure solid tuning stability. A gig bag is included.
                <Citation />
            </p>

            <h2 className="text-center product-page-heading">Features</h2>
            <div className="specs">

                {rocketeerGuitarSpecs.map((spec, index) => (
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
                    <GLLimitedCard />
                    <SquierBulletCard />
                    <StratocasterLimitedCard />
                    <RogueRd80Card />
                </div>
            </div>
            <h2 className="text-center product-page-heading">Reviews</h2>
            <div>
                {editing ? (
                    <div>
                        <h2 className="text-center">Update Review</h2>
                        <UpdateReviewForm
                            setEditing={setEditing}
                            currentUser={currentUser}
                            updateReview={updateReview}
                        />
                    </div>
                ) : (
                        <div></div>

                    )}
            </div>
            <ReviewerList
                editReview={editReview}
                deleteReview={deleteReview}
                reviewer={reviewer}
            />


            <div className="add-review">
                <h2 className="text-center product-page-heading">Leave a Review</h2>
                <AddReview addReviewer={addReviewer} />
            </div>
            <h2 className="text-center product-page-heading">People Who Bought This Item Also Bought</h2>
            <div className="product-div">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <ElixerGuitarStringsCard />
                    <FenderGuitarStandCard />
                    <RapcoMicCableCard />
                    <FingereaseGuitarStringCard />
                </div>
            </div>
            <FreeShipping />
            <GuitarWarranty />
        </div>
    );
}
export default RocketeerGuitarPage;