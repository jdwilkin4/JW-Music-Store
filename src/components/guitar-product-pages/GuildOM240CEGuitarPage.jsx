import React, { useState } from 'react';
import { fiveStarReview, OrderTemplate, InStock } from '../component-exports';
import { Citation, FenderFa135Card, GLLimitedCard, SquierAffinityCard, TelecasterCard } from '../component-exports';
import { RogueG10AmpCard, Line6HelixCard, LRBaggsVenueCard, MusiciansGearPedalCard, GuitarWarranty, FreeShipping } from '../component-exports';
import { AddReview, ReviewerList, UpdateReviewForm } from '../component-exports';
import guild240 from './guild-240-product-specs';


const GuildOM240CE = () => {
    //initialize state for reviews and edits 
    const [reviewer, setReviewer] = useState(fiveStarReview);
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
            <h1 className="text-center sub-page-heading">Guild OM-240CE Acoustic-Electric Guitar Charcoal Burst</h1>

            <div className="product-row">
                <img src={process.env.PUBLIC_URL + '/Guitars-images/Guild OM-240CE Orchestra Acoustic-Electric Guitar Charcoal Burst.jpg'} alt="guitar" className="product-img-page" />
                <div className="product-column">
                    <h2 className="product-price text-center">$499.99</h2>
                    <InStock />
                    <OrderTemplate />
                </div>
            </div>
            <h2 className="text-center product-page-heading">Overview</h2>
            <p className="card-title">
                The OM-240CE with Charcoal Burst finish is an extremely limited-edition mid-sized orchestra-shaped acoustic-electric guitar equally suited for strumming and fingerpicking.
                It produces a sweet, balanced tone that is perfect for the versatile musician. This OM-240CE Charcoal Burst features a solid Sitka spruce top, mahogany sides,
                arched mahogany back, and an elegant cutaway for access to higher frets.
            <p>
                    Guild’s signature arched back design gives the OM-240CE great volume and projection, long sustain, and a lush, full sound.
                    This cool guitar also includes Guild’s AP-1 pickup, bone nut and saddle, pearloid rosette,
                    period-correct tortoiseshell pickguard, and a matte polyurethane finish.
            </p>
                <p>
                    The OM-240CE also comes with an optional pickguard you can put on your guitar for extra style points if you so choose.

            </p>
                <Citation />
            </p>

            <h2 className="text-center product-page-heading">Features</h2>
            <div className="specs">

                {guild240.map((spec, index) => (
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
                    <FenderFa135Card />
                    <GLLimitedCard />
                    <SquierAffinityCard />
                    <TelecasterCard />
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
                    <LRBaggsVenueCard />
                    <Line6HelixCard />
                    <MusiciansGearPedalCard />
                    <RogueG10AmpCard />
                </div>
            </div>
            <FreeShipping />
            <GuitarWarranty />
        </div>
    );
}
export default GuildOM240CE;