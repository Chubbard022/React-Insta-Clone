import React from 'react'
import CommentSection from './CommentSection';
import PropTypes from 'prop-types';



const PostContainer = props =>{
    // console.log(props)
        return(
        <div className='card-holder'>
            {
                props.array.map((post,index)=>
                    <div className='insta-post' key={index}>
                        < CommentSection
                            key={post.username} 
                            commentInput={props.commentInput} 
                            addLike={props.addLike} 
                            addComment={props.addComment} 
                            passedArray={post} 
                            handleChange={props.handleChange}
                         />
                    </div>
                )
            }
        </div>
    )
}

PostContainer.propTypes = {
    array: PropTypes.arrayOf(
        PropTypes.shape({
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    username: PropTypes.string,
                    text: PropTypes.string
                })
            ),
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            username: PropTypes.string,
            imageUrl: PropTypes.string
        })
    )
}

export default PostContainer;