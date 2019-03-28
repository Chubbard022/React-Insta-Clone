import React from 'react'
import styled, { css } from 'styled-components';
import './PostPage.css';
import CommentSection from './CommentSection';
import PropTypes from 'prop-types';


const CardHolder = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 40px;
`;

const InstaPost = styled.div`
    border: 1px solid black;
    margin: 10px;
    width: 50%;
    padding: 5px;
`;

 const PostContainer = props =>{
        return(
        <CardHolder>
            {
                props.array.map((post,index)=>
                < InstaPost key={index}>
                            < CommentSection
                                key={post.username} 
                                passedArray={post} 
                                postId={post.id}
                            />
                </InstaPost>
                )
            }
        </CardHolder>
    )
  }

PostContainer.propTypes = {
    array: PropTypes.arrayOf(
        PropTypes.shape({
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    username: PropTypes.string,
                    text: PropTypes.string
                })
            ),
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            username: PropTypes.string,
            imageUrl: PropTypes.string
        })
    )
}

export default PostContainer;

