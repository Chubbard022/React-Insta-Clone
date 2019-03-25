import React from 'react'
import CommentSection from './CommentSection';
import PropTypes from 'prop-types';



const PostContainer = props =>{
    console.log(props)
    return(
        <div className='card-holder'>
            {
                props.array.map(post=>
                    <div className='insta-post' key={post.username}>
                        < CommentSection key={post.username} passedArray={post}/>
                    </div>
                )
            }
        </div>
    )
}

PostContainer.propTypes = {
    array: PropTypes.arrayOf(
        PropTypes.shape({
            comments: PropTypes.array,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            username: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired
        })
    )
}

export default PostContainer;