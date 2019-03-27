import React from 'react'
import CommentSection from './CommentSection';
import PropTypes from 'prop-types';


 const PostContainer = props =>{
        return(
        <div className='card-holder'>
            {
                props.array.map((post,index)=>
                <div className='insta-post' key={index}>
                            < CommentSection
                                key={post.username} 
                                passedArray={post} 
                                postId={post.id}
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


// class PostContainer extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             comments: props.comments,
//             commentInput: ''
//         }
//     }
//     handleChange=event=>{    
//         this.setState({
//           commentInput: event.target.value
//         })
//       }
//       updateComments = event =>{
//           event.preventDefault();

//           const newComment = {
//               id: Date.now(),
//               text: this.state.commentInput,
//               username: 'anonymous'
//           }
//             this.setState({
//                 comments: [...this.state.comments, newComment],
//                 commentInput: ''
//         })
//       }
//     render(){
         
//         return(
//         <div className='card-holder'>
//             {
//                 this.props.array.map((post,index)=>
//                 <div className='insta-post' key={index}>
//                             < CommentSection
//                                 key={post.username} 
//                                 commentInput={this.props.commentInput} 
//                                 passedArray={post} 
//                                 handleChange={this.handleChange}
//                                 updateComments={this.updateComments}
//                             />
//                 </div>
                
//                 )
//             }
//         </div>
//     )
//   }
// }