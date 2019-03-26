import React from 'react';
import Comments from './Comment';


const CommentSection = props =>{
    console.log("props being passed in")
    return(
        <div className='comment-section'>
            <header className='card-header'>
                <img src={props.passedArray.thumbnailUrl} alt=''/>
                <p>{props.passedArray.username}</p>
            </header>
            <img src={props.passedArray.imageUrl} alt=''/>
            <p className='icons'><i className="far fa-heart" onClick={props.addLike}></i><i className="far fa-comment" onClick={props.addComment}></i></p>
            <p className='likes'>{props.passedArray.likes} Likes</p>
            <Comments  array={props.passedArray}/>
            <form>
                <input 
                    type='text'
                    placeholder='add comment'
                    onChange={props.handleChange}
                    value={props.commentInput}
                />
            </form>
        </div>
    )
}

export default CommentSection