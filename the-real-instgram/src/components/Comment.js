import React from 'react';

const Comments = props =>{
    return(
        <div className='comment-section'>
            <p>Comments will appear here</p>
            <input 
                type='text'
                placeholder='add comment'
            />
        </div>
    )
}
export default Comments;