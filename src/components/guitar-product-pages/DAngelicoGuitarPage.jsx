import React, { useState } from 'react';
import { threeStarReview, OrderTemplate, InStock } from '../component-exports';
import { Citation, StratocasterLimitedCard, GuildOM240CECard, GLLimitedCard, SquierBulletTelecasterCard } from '../component-exports';
import { DeluxeCaseCard, ElixerGuitarStringsCard, FingereaseGuitarStringCard, BraidedCableCard, GuitarWarranty, FreeShipping } from '../component-exports';
import { AddReview, ReviewerList, UpdateReviewForm } from '../component-exports';
import dAngelico from './angelico-product-specs';


const AngelicoGuitar = () => {
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
            <h1 className="text-center sub-page-heading">D'Angelico Premier Series EXL-1</h1>

            <div className="product-row">
                <img src={process.env.PUBLIC_URL + '/Guitars-images/DAngelico Premier Series EXL1 Hollowbody Electric Guitar with Stairstep Tailpiece Transparent Wine.jpg'} alt="guitar" className="product-img-page" />
                <div className="product-column">
                    <h2 className="product-price text-center">$749.99</h2>
                    <InStock />
                    <OrderTemplate />
                </div>
            </div>
            <h2 className="text-center product-page-heading">Overview</h2>
            <p className="card-title">
                D’Angelico's flagship archtop returns in the all-new Premier Series.
                Crafted from John D’Angelico’s original design, the Premier EXL-1's balanced, organic tone recalls the sound of a classic New York jazz box. Couple that with signature D'Angelico
                features in the Stairstep tailpiece, Skyscraper truss rod cover, and iconic headstock, the EXL-1 embodies elegance. Its single floating mini-humbucker highlights its naturally punchy mids and warm acoustic edge.
                Designed for jazz players worldwide, the Premier EXL-1 is a staple. Includes gig bag.
                <Citation />
            </p>

            <h2 className="text-center product-page-heading">Features</h2>
            <div className="specs">
                {dAngelico.map((spec, index) => (
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
                    <StratocasterLimitedCard />
                    <GuildOM240CECard />
                    <GLLimitedCard />
                    <SquierBulletTelecasterCard />
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
                    <DeluxeCaseCard />
                    <ElixerGuitarStringsCard />
                    <FingereaseGuitarStringCard />
                    <BraidedCableCard />
                </div>
            </div>
            <FreeShipping />
            <GuitarWarranty />
        </div>
    );
}
export default AngelicoGuitar;