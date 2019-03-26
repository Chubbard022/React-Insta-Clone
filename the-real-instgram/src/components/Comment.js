import React from 'react';


const Comments = props =>{
    //console.log(props.array.comments.[0].username)
    return(
        <div className='comment-section'>
        {
                props.array.comments.map((comment,index)=>

                    <div key={index} className="comment-box">
                        <p className='comment-username'><strong>{comment.username}</strong></p>
                        <p>{comment.text}</p>
                    </div>
                )
            }
            <input 
                type='text'
                placeholder='add comment'
            />
            <button>Add Comment</button>
        </div>
    )
}

export default Comments;