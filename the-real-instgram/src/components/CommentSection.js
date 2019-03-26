import React from 'react';
import Comments from './Comment';


const CommentSection = props =>{
    return(
        <div className='comment-section'>
            <header className='card-header'>
                <img src={props.passedArray.thumbnailUrl} alt=''/>
                <p>{props.passedArray.username}</p>
            </header>
            <img src={props.passedArray.imageUrl} alt=''/>
            <p className='icons'><i className="far fa-heart"></i><i className="far fa-comment"></i></p>
            <p className='likes'>{props.passedArray.likes} Likes</p>
            <Comments  array={props.passedArray}/>
            <input 
                type='text'
                placeholder='add comment'
                task={props.handleInput}
            />
        </div>
    )
}

export default CommentSection