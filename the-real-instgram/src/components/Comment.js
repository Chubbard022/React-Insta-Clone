import React from 'react';

const Comments = props =>{
    //console.log(props.array.comments.[0].username)
    return(
        <div className='comment-section'>
        <div className='comment-box'>
            <p><strong>{props.array.comments[0].username}</strong></p>
            <p>{props.array.comments[0].text}</p>
        </div>
        <div  className='comment-box'>
            <p><strong>{props.array.comments[1].username}</strong></p>
            <p>{props.array.comments[1].text}</p>
        </div>
        <div className='comment-box'>
            <p><strong>{props.array.comments[2].username}</strong></p>
            <p>{props.array.comments[2].text}</p>
        </div>
            <p>Comments will appear here</p>
            <input 
                type='text'
                placeholder='add comment'
            />
        </div>
    )
}
export default Comments;