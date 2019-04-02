import React from 'react';
import styled, { css } from 'styled-components';
import './PostPage.css';

const CommentBox = styled.div`
    display: flex;
`;

const Username = styled.p`
margin-right: 5px;
`;

const Comments = props =>{
    return(
        <div>
        {
                props.array.map((comment,index)=>

                    <CommentBox>
                        <Username><strong>{comment.username}</strong></Username>
                        <p>{comment.text}</p>
                    </CommentBox>
                )
        }
        </div>
    )
}

export default Comments;