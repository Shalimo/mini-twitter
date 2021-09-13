import React, {Component} from "react";

import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChanged = (e) => {
            this.setState({
                text: e.target.value
            })
        }
        this.onSubmit = (e) => {
            e.preventDefault();
            this.props.added(this.state.text)
            e.target.reset();
        }
    }
    render() {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="What do you think about?"
                    className="form-control new-post-label"
                    onChange={this.onValueChanged}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                    >
                Add</button>
            </form>
        )
    }
   
}

