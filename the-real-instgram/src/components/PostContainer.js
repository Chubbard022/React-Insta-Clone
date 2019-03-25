import React from 'react'
import CommentSection from './CommentSection';



const PostContainer = props =>{
    console.log(props)
    return(
        <React.Fragment>
            {
                props.array.map(post=>
                    < CommentSection key={post.username} passedArray={post} />
                )
            }
        </React.Fragment>
    )
}

export default PostContainer;