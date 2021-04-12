import React, { useState } from 'react';

const AddReview = (props) => {
    const initialFormState = {
        id: null,
        title: '',
        name: '',
        message: ''
    }
    const [reviewer, setReviewer] = useState(initialFormState)
    const handleInputChange = (event) => {
        const { name, value } = event.target

        setReviewer({ ...reviewer, [name]: value })
    }
    return (
        <div>
            <form
                onSubmit={(event) => {
                    event.preventDefault()
                    // form validation to check if user enters nothing
                    if (!reviewer.title || !reviewer.name || !reviewer.message) return

                    props.addReviewer(reviewer)
                    setReviewer(initialFormState)
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
                    <label htmlFor="user">First &amp; Last name:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="user"
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
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary text-center review-btn">Add review</button>
                </div>

            </form>
        </div>

    )
}
export default AddReview