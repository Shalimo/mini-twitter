import React, {Component} from "react";

import './search-panel.css';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
        this.onUpdateSearch = (e) => {
            const {onUpdateSearch} = this.props;
            const term = e.target.value;
            this.setState({term: term});
            onUpdateSearch(term);
        }
    }
    
    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Search"
                onChange={this.onUpdateSearch}
            />
        )
    }
}

