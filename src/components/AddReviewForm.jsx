import React from 'react';

const AddReview = (props) => {
    return (
        <div>
            <form className="review-form">
                <div className="form-label">
                    <label htmlFor="title"> Title for review
                        <input className="review-input" type="text" name="title" value="" id="title" />
                    </label>
                </div>
                <div className="form-label">
                    <label htmlFor="user">First &amp; Last name
                        <input className="review-input" type="text" name="user" value="" id="user" />
                    </label>
                </div>

                <textarea className="review-input" autoComplete="off" name="message" cols="20" rows="10"></textarea>
                <button>Add review</button>
            </form>
        </div>

    )
}
export default AddReview