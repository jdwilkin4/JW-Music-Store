import React, { useState } from 'react';
import { fourStarReview, OrderTemplate, InStock } from '../component-exports';
import { Citation, TelecasterCard, DAngelicoCard, GuildOM240CECard, RogueRd80Card } from '../component-exports';
import { BraidedCableCard, DeluxeCaseCard, FenderGuitarStandCard, RapcoMicCableCard, GuitarWarranty, FreeShipping } from '../component-exports';
import { AddReview, ReviewerList, UpdateReviewForm } from '../component-exports';
import GlAsatGuitar from './GL-ASAT-Classic-product-specs';


const GlAsatGuitarPage = () => {
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
            <h1 className="text-center sub-page-heading">G&amp;L Limited Edition Tribute ASAT Classic Electric Guitar</h1>

            <div className="product-row">
                <img src={process.env.PUBLIC_URL + '/Guitars-images/G&L Limited Edition Tribute ASAT Classic Ash Body Electric Guitar Gloss Natural.jpg'} alt="guitar" className="product-img-page" />
                <div className="product-column">
                    <h2 className="product-price text-center">$499.99</h2>
                    <InStock />
                    <OrderTemplate />
                </div>
            </div>
            <h2 className="text-center product-page-heading">Overview</h2>
            <p className="card-title">
                <p>
                    The G&amp;L ASAT Classic is Leo’s final word on the traditional single-cutaway bolt-on axe.
                    This special version features an ash body in natural gloss, a 9.5" fretboard radius and a tortoise pickguard.
                </p>
                <p>
                    Framed in a classic boxed-steel bridge, the G&amp;L-designed alnico pickups deliver crisp attack with
                    complex harmonics while individual brass saddles offer modern levels of intonation refinement.
                </p>
                <p>
                    The Tribute Series ASAT Classic is dripping with Leo mojo at a price attainable for every working musician.
                    Once you play a G&amp;L Tribute Series, you’ll never look back. C
                    ase sold separately.
                </p>
                <Citation />
            </p>

            <h2 className="text-center product-page-heading">Features</h2>
            <div className="specs">

                {GlAsatGuitar.map((spec, index) => (
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
                    <GuildOM240CECard />
                    <RogueRd80Card />
                    <TelecasterCard />
                    <DAngelicoCard />
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
                    <RapcoMicCableCard />
                    <FenderGuitarStandCard />
                    <BraidedCableCard />
                    <DeluxeCaseCard />
                </div>
            </div>
            <FreeShipping />
            <GuitarWarranty />
        </div>
    );
}
export default GlAsatGuitarPage;