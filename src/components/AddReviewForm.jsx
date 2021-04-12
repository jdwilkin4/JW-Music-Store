import React, { useState } from 'react';

const AddReview = (props) => {
    const initialFormState = {
        id: null,
        title: '',
        name: '',
        message: ''
    }
    const [reviewer, setReviewer] = useState(initialFormState)
    return (
        <div>
            <form className="review-form">
                <div className="form-group">
                    <label htmlFor="title"> Title for review:</label>
                    <input className="form-control" type="text" name="title" value="" id="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="user">First &amp; Last name:</label>
                    <input className="form-control" type="text" name="user" value="" id="user" />
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="rating" id="fiveStar" value="fiveStar" />
                    <label className="form-check-label" htmlFor="fiveStar"> Five star rating?</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="rating" id="fourStar" value="fourStar" />
                    <label className="form-check-label" htmlFor="fourStar"> Four star rating?</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="rating" id="threeStar" value="threeStar" />
                    <label className="form-check-label" htmlFor="threeStar"> Three star rating? </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="rating" id="twoStar" value="twoStar" />
                    <label className="form-check-label" htmlFor="twoStar"> Two star rating? </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="rating" id="oneStar" value="oneStar" />
                    <label className="form-check-label" htmlFor="oneStar"> One star rating? </label>
                </div>

                <textarea className="form-control" value="" autoComplete="off" name="message" cols="20" rows="10"></textarea>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary text-center review-btn">Add review</button>
                </div>

            </form>
        </div>

    )
}
export default AddReview