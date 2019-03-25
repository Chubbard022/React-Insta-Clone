import React from 'react';

const CommentSection = props =>{
    console.log('each post',props.passedArray)
    return(
        <div>
            <header className='card-header'>
                <img src={props.passedArray.thumbnailUrl} alt=''/>
                <p>{props.passedArray.username}</p>
            </header>
            <img src={props.passedArray.imageUrl} alt=''/>
            <p>Comments here</p>
        </div>
    )
}

export default CommentSection