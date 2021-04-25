import React, { useState } from 'react';
import { fourStarReview, OrderTemplate, InStock } from '../component-exports';
import { Citation, SquierAffinityCard, FenderFa135Card, RogueRocketeerCard, SquierBulletCard } from '../component-exports';
import { BraidedCableCard, DeluxeCaseCard, FenderRUMBLECard, RogueG10AmpCard, GuitarWarranty, FreeShipping } from '../component-exports';
import { AddReview, ReviewerList, UpdateReviewForm } from '../component-exports';
import fenderTelecaster from './fender-telecaster-product-specs';


const FenderTelecaster = () => {
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
            <h1 className="text-center sub-page-heading">Fender Player Telecaster Maple Fingerboard Electric Guitar Capri Orange</h1>

            <div className="product-row">
                <img src={process.env.PUBLIC_URL + '/Guitars-images/Fender Player Telecaster Maple Fingerboard Electric Guitar Capri Orange.jpg'} alt="guitar" className="product-img-page" />
                <div className="product-column">
                    <h2 className="product-price text-center">$749.99</h2>
                    <InStock />
                    <OrderTemplate />
                </div>
            </div>
            <h2 className="text-center product-page-heading">Overview</h2>
            <p className="card-title">
                From a whisper to a scream, from pure country twang to serious rock and roll—even jazz—there are few guitars as outright versatile as a Telecaster.
                Respecting that long and storied heritage,
                while enhancing the instrument with the kinds of contemporary innovations that appeal to both
                casual and professional players, the Fender Player Series Telecaster puts a modern edge on the
                authentic Tele tone and vibe. Starting with a classic solid alder body loaded with Fender's Player Series
                Alnico V single-coil Tele pickups, the Player Series Tele adds a satin-finish Modern-C profile neck with
                a smooth, fast 9.5"-radius fingerboard and 22 medium-jumbo frets for clean, easy bending and expanded range.
                The thru-body-strung, six-saddle bridge provides precise intonation and the vintage-style, bent-steel saddles
                add some extra bite to the Tele's traditional twang. A true workhorse for virtually every musical genre,
                The Player Telecaster may be the guitar you'll play for the rest of your life, no matter how large your collection may grow.
                <Citation />
            </p>

            <h2 className="text-center product-page-heading">Features</h2>
            <div className="specs">

                {fenderTelecaster.map((spec, index) => (
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
                    <FenderFa135Card />
                    <RogueRocketeerCard />
                    <SquierAffinityCard />
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
                    <RogueG10AmpCard />
                    <BraidedCableCard />
                    <DeluxeCaseCard />
                    <FenderRUMBLECard />

                </div>
            </div>
            <FreeShipping />
            <GuitarWarranty />
        </div>
    );
}
export default FenderTelecaster;