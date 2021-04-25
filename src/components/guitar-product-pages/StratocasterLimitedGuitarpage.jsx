import React, { useState } from 'react';
import { fourStarReview, OrderTemplate, InStock } from '../component-exports';
import { Citation, GLLimitedCard, GuildOM240CECard,SquierBulletCard,TelecasterCard } from '../component-exports';
import { RogueG10AmpCard, FenderRUMBLECard,LRBaggsVenueCard,HeadRushPedalboardCard, GuitarWarranty, FreeShipping } from '../component-exports';
import { AddReview, ReviewerList, UpdateReviewForm } from '../component-exports';
import stratocasterLimited from './stratocaster-limited-product-specs';


const StratocasterLimitedGuitarPage = () => {
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
            <h1 className="text-center sub-page-heading">Fender Player Stratocaster Maple Fingerboard Limited Edition Electric Guitar Shell Pink</h1>

            <div className="product-row">
                <img src={process.env.PUBLIC_URL + '/Guitars-images/Fender Player Stratocaster Maple Fingerboard Limited Edition Electric Guitar Shell Pink.jpg'} alt="guitar" className="product-img-page" />
                <div className="product-column">
                    <h2 className="product-price text-center">$774.99</h2>
                    <InStock />
                    <OrderTemplate />
                </div>
            </div>
            <h2 className="text-center product-page-heading">Overview</h2>
            <p className="card-title">
              
                Over the decades, players have been continually inspired by the sound of a Strat. 
                From the clarity of the high end, through the gut punch of the mids and the solid lows, 
                it's a sound that's helped define what an electric guitar should be—versatile enough for any 
                style and broad enough for any player to find an individual voice.
             
                <Citation />
            </p>

            <h2 className="text-center product-page-heading">Features</h2>
            <div className="specs">

                {stratocasterLimited.map((spec, index) => (
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
                <GLLimitedCard/>
                <GuildOM240CECard/>
                <SquierBulletCard/>
                <TelecasterCard/>
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
                    <HeadRushPedalboardCard/>
                    <LRBaggsVenueCard/>
                    <RogueG10AmpCard/>
                    <FenderRUMBLECard/>
                </div>
            </div>
            <FreeShipping />
            <GuitarWarranty />
        </div>
    );
}
export default StratocasterLimitedGuitarPage;