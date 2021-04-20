import React, { useState } from 'react';
import { Citation, OrderTemplate, InStock, MusiciansGearPedalCard } from '../component-exports';
import { fiveStarReview, DAngelicoCard, SquierBulletTelecasterCard, GLLimitedCard, RogueRd80Card } from '../component-exports';
import { FreeShipping, GuitarWarranty, FenderGuitarStandCard, AmpegSVT4Card, FingereaseGuitarStringCard } from '../component-exports';
import hssGuitar from './hss-guitar-product-specs';
import { AddReview, ReviewerList, UpdateReviewForm } from '../component-exports';


const StratocasterHSSGuitarPage = () => {
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
            <h1 className="text-center sub-page-heading">Fender Player Stratocaster HSS Plus Top Maple Fingerboard</h1>

            <div className="product-row">
                <img src={process.env.PUBLIC_URL + '/Guitars-images/Fender Player Stratocaster HSS Plus Top Maple Fingerboard Limited-Edition Electric Guitar Blue Burst.jpg'} alt="guitar" className="product-img-page" />
                <div className="product-column">
                    <h2 className="product-price text-center">$809.99</h2>
                    <InStock />
                    <OrderTemplate />
                </div>
            </div>
            <h2 className="text-center product-page-heading">Overview</h2>
            <div className="card-title">
                <p>
                    Over the decades, players have been continually inspired by the sound of a Strat. From the clarity of the high end, through the gut punch of the mids and the solid lows, it's a sound that's helped define what an electric guitar
                    should be—versatile enough for any style and broad enough for any player to find an individual voice. This Limited-Edition Player Series Stratocaster puts all of the classic features of the Strat at your fingertips
                    while adding a modern edge, plus a bridge position humbucker for a little more rock-and-roll attitude. With a beautifully flamed maple top over a solid alder body, a 22-fret maple fingerboard with a contemporary 9.5"
                    radius for easy bending and an updated 2-point fulcrum tremolo bridge, the Player Series Stratocaster Plus Top is primed and ready to carry you along your musical voyage.
                </p>
                <Citation />
            </div>
            <h2 className="text-center product-page-heading">Features</h2>
            <div className="specs">
                {hssGuitar.map((spec, index) => (
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
                    <DAngelicoCard />
                    <SquierBulletTelecasterCard />
                    <GLLimitedCard />
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
                    <FenderGuitarStandCard />
                    <AmpegSVT4Card />
                    <FingereaseGuitarStringCard />
                    <MusiciansGearPedalCard />
                </div>
            </div>
            <FreeShipping />
            <GuitarWarranty />
        </div>
    )


}
export default StratocasterHSSGuitarPage