import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = props =>{
    console.log('each post',props.passedArray)
    return(
        <div>
            <p>comment section here</p>
        </div>
    )
}
CommentSection.propTypes={

}

export default CommentSection;