import React from 'react';

const ReviewerList = props => {
    return (
        <div>
            {props.reviewer.length > 0 ? (
                props.reviewer.map((review, index) => (
                    <div className="review-container" key={index}>
                        <h3 className="text-center">{review.title}</h3>
                        <hr />
                        <p className="text-center">{review.name}</p>
                        <p className="text-center">{review.message}</p>
                        <div className="review-btns">
                            <button
                                onClick={() => props.editReview(review)}
                                type="button"
                                className="btn btn-primary">
                                Edit
                            </button>
                            <button
                                onClick={() => props.deleteReview(review.id)}
                                type="button"
                                className="btn btn-danger">
                                Delete
                            </button>
                        </div>
                    </div>
                ))

            ) : (
                    <div className="review-container">
                        <p>There are no reviews yet.</p>
                    </div>
                )}

        </div>
    )




}
export default ReviewerList