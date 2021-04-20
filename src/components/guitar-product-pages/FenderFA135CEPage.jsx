import React, { useState } from 'react';
import { Citation, OrderTemplate, InStock } from '../component-exports';
import { SquierBulletCard, GuildOM240CECard, RogueRocketeerCard, GLLimitedCard, fourStarReview } from '../component-exports';
import { DrBeatCard, DeluxeCaseCard, BraidedCableCard, FenderGuitarStandCard, FreeShipping, GuitarWarranty } from '../component-exports';
import fender135 from './fender135-product-specs';
import { AddReview, ReviewerList, UpdateReviewForm } from '../component-exports';


const FenderFA135CEPage = () => {
    //initialize state for reviews and edits 
    const [reviewer, setReviewer] = useState(fourStarReview);
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
            <h1 className="text-center sub-page-heading">Fender FA-135CE Concert Acoustic-Electric Guitar Natural</h1>

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
                    <DrBeatCard />
                    <BraidedCableCard />
                    <FenderGuitarStandCard />
                    <DeluxeCaseCard />
                </div>
            </div>
            <FreeShipping />
            <GuitarWarranty />
        </div>
    )
}
export default FenderFA135CEPage