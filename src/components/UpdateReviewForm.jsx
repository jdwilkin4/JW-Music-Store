import React, { useState } from 'react';

const UpdateReviewForm = props => {
    const [reviewer, setReviewer] = useState(props.currentUser)
    const handleInputChange = (event) => {
        const { name, value } = event.target

        setReviewer({ ...reviewer, [name]: value })
    }
    return (
        <div>
            <form
                onSubmit={(event) => {
                    event.preventDefault()

                    props.updateReview(reviewer.id, reviewer)

                }}
                className="review-form"
            >
                <div className="form-group">
                    <label htmlFor="title"> Title for review:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="title"
                        value={reviewer.title}
                        onChange={handleInputChange}
                        id="title"

                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">First &amp; Last name:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={reviewer.name}
                        onChange={handleInputChange}
                        id="user"

                    />
                </div>

                <p>Please leave your review below:</p>
                <textarea
                    className="form-control"
                    value={reviewer.message}
                    onChange={handleInputChange}
                    autoComplete="off"
                    name="message"
                    cols="20"
                    rows="10"
                >
                </textarea>

                <div className="review-btns">
                    <button className="btn btn-primary">Update review</button>
                    <button
                        onClick={() => props.setEditing(false)}
                        className="btn btn-danger"
                    >
                        Cancel
                    </button>
                </div>

            </form>
        </div>
    )

}
export default UpdateReviewForm