import React from 'react';
import Comments from './Comment';


const CommentSection = props =>{
    console.log('each post',props.passedArray)
    return(
        <div>
            <header className='card-header'>
                <img src={props.passedArray.thumbnailUrl} alt=''/>
                <p>{props.passedArray.username}</p>
            </header>
            <img src={props.passedArray.imageUrl} alt=''/>
            <Comments />
        </div>
    )
}

export default CommentSection