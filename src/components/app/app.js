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
        this.maxId = 4;
        this.state = {
            data : [
                {label: 'Going to learn React', important: false, like: false, id: 1},
                {label: 'That is so good', important: false, like: false, id: 2},
                {label: 'I need a break...', important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.deleteItem = (id) => {
            this.setState(({data}) => ({
                data : data.filter(item => item.id !== id)
            }))
        }
        this.addItem = (body) => {
            const newItem = {label: body, important: false, like: false, id: this.maxId++};
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                console.log(data);
                return {data: newArr}
            })
        }
        this.toggleImportant = (id) => {
            this.setState(({data}) => {
                const index = data.findIndex(elem => elem.id === id);
                const oldObj = data[index];
                const newObj = {...oldObj, important : !oldObj.important}
                const newArr = [...data.slice(0, index), newObj, ...data.slice(index + 1)]
 
                return {data: newArr}
             })
        }
        this.toggleLike = (id) => {
            this.setState(({data}) => {
               const index = data.findIndex(elem => elem.id === id);
               const oldObj = data[index];
               const newObj = {...oldObj, like : !oldObj.like}
               const newArr = [...data.slice(0, index), newObj, ...data.slice(index + 1)]

               return {data: newArr}
            })
        }
        this.searchPost = (items, term) => {
            if (term.length === 0) {
                return items
            }

            return items.filter((item) => {
                return item.label.indexOf(term) > -1; 
            });
        }
        this.updateSearch = (text) => {
            this.setState({term: text});
        }
        this.filterPost = (items, filter) => {
            if (filter === 'like') {
                return items.filter(item => item.like)
            } else {
                return items
            }
        }
        this.filterSelect = (searchFilter) => {
            this.setState({filter: searchFilter});
        }

    }

    render() {
        const {data, term, filter} = this.state;
        const likedPosts = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppBlock>
                <AppHeader
                likedPosts={likedPosts}
                allPosts={allPosts}/>
                <div className="search-panel d-flex">
                <SearchPanel
                onUpdateSearch={this.updateSearch}/>
                <PostStatusFilter
                filter={filter}
                onFilterSelect={this.filterSelect}/>
                </div>
                <PostList 
                    posts={visiblePosts}
                    deleted={this.deleteItem}
                    toggledImportant={this.toggleImportant}
                    toggledLike={this.toggleLike}/>
                <PostAddForm
                    added={this.addItem}/>
            </AppBlock>
        )
    }
   
}