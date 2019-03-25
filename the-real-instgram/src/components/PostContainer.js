import React from 'react'
import CommentSection from './CommentSection';
import PropTypes from 'prop-types';



const PostContainer = props =>{
    console.log(props)
    return(
        <React.Fragment>
            {
                props.array.map(post=>
                    <div className='insta-post' key={post.username}>
                        <h1>{post.username}</h1>
                        <img src={post.imageUrl} alt='uploaded-photo'/>
                        < CommentSection key={post.username} passedArray={post} />
                    </div>
                )
            }
        </React.Fragment>
    )
}

PostContainer.propTypes = {
    
}

export default PostContainer;