import React from 'react';
import { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

export default class App extends Component { // компонент с приложением
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', important: false, id: 'awdaw'},
                {label: 'That is so good', important: false, id: 'wads'},
                {label: 'I need a break...', important: false, id: 'scxc'}
            ]
        }
        this.deleteItem = (id) => {
            this.setState(({data}) => ({
                data : data.filter(item => item.id !== id)
            }))
        }

    }

    render() {
        return (
            <AppBlock>
                <AppHeader/>
                <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data}
                    deleted={this.deleteItem}/>
                <PostAddForm/>
            </AppBlock>
        )
    }
   
}