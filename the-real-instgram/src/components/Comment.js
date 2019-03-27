import React from 'react';


const Comments = props =>{
    console.log(props.array)
    return(
        <div className='comment-section'>
        {
                props.array.map((comment,index)=>

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