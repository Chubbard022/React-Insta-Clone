import React from 'react';


const Comments = props =>{
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
        </div>
    )
}

export default Comments;