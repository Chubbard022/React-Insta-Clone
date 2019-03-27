import React from 'react';
import Comments from './Comment';


class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state={
            comments: props.passedArray.comments,
            commentInput:'',
            likes: props.passedArray.likes
        }
        }
        //get input from input feild
        handleChange=event=>{    
                this.setState({
                    commentInput: event.target.value
            })
        }
    
        updateComments = event =>{
            event.preventDefault();

            const newComment = {
                id: Date.now(),
                text: this.state.commentInput,
                username: 'anonymous'
            }
            this.setState({
                comments: [...this.state.comments, newComment],
                commentInput: ''
            })
        }
        addLike = (post) =>{
                const {likes} = post;
                this.setState({likes: likes+1})
        }
        
        render(){
            
    return(
        <div className='comment-section'>
            <header className='card-header'>
                <img src={this.props.passedArray.thumbnailUrl} alt=''/>
                <p>{this.props.passedArray.username}</p>
            </header>
            
            <img src={this.props.passedArray.imageUrl} alt=''/>
            <p className='icons'> 
                <i className="far fa-heart" onClick={()=>this.addLike(this.state.likes)}></i>
                <i className="far fa-comment"></i>
            </p>
            <p className='likes'>{this.state.likes} Likes</p>

            <Comments  array={this.state.comments}/>

            <form onSubmit={this.updateComments}>
                <input 
                    type='text'
                    placeholder='add comment'
                    onChange={this.handleChange}
                    value={this.state.commentInput}
                />
            </form>
        </div>
    )
  }
}

export default CommentSection



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