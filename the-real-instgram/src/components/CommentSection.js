import React from 'react';
import Comments from './Comment';


const CommentSection = props =>{
    return(
        <div>
            <header className='card-header'>
                <img src={props.passedArray.thumbnailUrl} alt=''/>
                <p>{props.passedArray.username}</p>
            </header>
            <img src={props.passedArray.imageUrl} alt=''/>
            <Comments array={props.passedArray}/>
        </div>
    )
}

export default CommentSection