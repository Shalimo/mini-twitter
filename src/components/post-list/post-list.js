import React from "react";
import { ListGroup } from 'reactstrap';

import './post-list.css';

import PostListItem from '../post-list-item';

const PostList = ({posts, deleted}) => {

    const elements = posts.map((item) => {
        return (
            <li key={item.id} className="list-group-item">
                <PostListItem
                label ={item.label}
                important={item.important}
                onDelete={() => deleted(item.id)}/>
            </li>
        )
    });

    return (
        <ListGroup className="app-list">
           {elements}
        </ListGroup>
    )
}

export default PostList;