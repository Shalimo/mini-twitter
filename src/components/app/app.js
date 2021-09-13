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
            ]
        }
        this.deleteItem = (id) => {
            this.setState(({data}) => ({
                data : data.filter(item => item.id !== id)
            }))
        }
        this.addItem = (body) => {
            const newItem = {
                label: body,
                important: false,
                id: this.maxId++
            }
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data : newArr
                }
            })
        }
        this.toggleImportant = (id) => {
            console.log(`Important ${id}`);
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

    }

    render() {
        const {data} = this.state;
        const likedPosts = data.filter(item => item.like).length;
        const allPosts = data.length;

        return (
            <AppBlock>
                <AppHeader
                likedPosts={likedPosts}
                allPosts={allPosts}/>
                <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data}
                    deleted={this.deleteItem}
                    toggledImportant={this.toggleImportant}
                    toggledLike={this.toggleLike}/>
                <PostAddForm
                    added={this.addItem}/>
            </AppBlock>
        )
    }
   
}