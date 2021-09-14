import React, {Component} from "react";
import {Button} from 'reactstrap';

import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ]
    }

    render() {
        const {filter, onFilterSelect} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const active = filter === name;
            const className = active ? 'info' : 'outline-secondary'
            return (
                <Button onClick={() => onFilterSelect(name)} key={name} color={className}>{label}</Button>
            )
        })
        
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

