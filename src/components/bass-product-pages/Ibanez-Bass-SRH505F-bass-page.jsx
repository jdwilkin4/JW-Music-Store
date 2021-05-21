import React, { useState } from 'react';
import { fiveStarReview, OrderTemplate, InStock } from '../component-exports';
import { Citation, CremonaSb3BassCard, RogueLx205BassCard, SilverCreekBassCard, SterlingStingRayBassCard } from '../component-exports';
import { GuitarWarranty, FreeShipping, SeElectronicsX1sStudioCard, TascamVocalProcessorCard, HeadRushPedalboardCard, AmpegSVT4Card } from '../component-exports';
import { AddReview, ReviewerList, UpdateReviewForm } from '../component-exports';
import bassSpecs from './bass-specs';


const IbanezSRH505BassPage = () => {
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
            <h1 className="text-center sub-page-heading">Ibanez Bass Workshop SRH505F Fretless 5-String Electric Bass</h1>

            <div className="product-row">
                <img src={process.env.PUBLIC_URL + '/Basses-images/Ibanez Bass Workshop SRH505F Fretless 5-String Electric Bass Flat Natural Browned Burst.jpg'} alt="guitar" className="product-img-page" />
                <div className="product-column">
                    <h2 className="product-price text-center">$749.99</h2>
                    <InStock />
                    <OrderTemplate />
                </div>
            </div>
            <h2 className="text-center product-page-heading">Overview</h2>
            <div className="card-title">
                <p>
                    If you crave a new bass tool to enrich your creative palette, the Ibanez Bass Workshop may
                    have already built your next instrument. This product group focuses on combining unusual
                    concepts with the bass-building virtuosity on which Ibanez has built its reputation.
                </p>
                <p>
                    Unlike other hollow body basses, the SRH boasts a unique concept:
                    the integration of the authentic feel expected in a hollow body and the key features that
                    distinguish SRH505F fretless as a contemporary bass. With its sleek, compact,
                    comfortable lightweight body, the SRH breaks another boundary to open up your playing.
                </p>
                <Citation />
            </div>

            <h2 className="text-center product-page-heading">Features</h2>
            <div className="specs">

                {bassSpecs.map((spec, index) => (
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
                    <SterlingStingRayBassCard />
                    <SilverCreekBassCard />
                    <RogueLx205BassCard />
                    <CremonaSb3BassCard />
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
                    <AmpegSVT4Card />
                    <HeadRushPedalboardCard />
                    <TascamVocalProcessorCard />
                    <SeElectronicsX1sStudioCard />
                </div>
            </div>
            <FreeShipping />
            <GuitarWarranty />
        </div>
    );
}
export default IbanezSRH505BassPage;