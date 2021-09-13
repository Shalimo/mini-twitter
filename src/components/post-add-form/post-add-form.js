import React from "react";

import './post-add-form.css';

const PostAddForm = ({added}) => {
    return (
        <div className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="What do you think about?"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={() => added('hello')}>
            Add</button>
        </div>
    )
}

export default PostAddForm;