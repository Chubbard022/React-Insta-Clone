import React from 'react';
import Comments from './Comment';
import styled, { css } from 'styled-components';
import './PostPage.css';

const CardHeader = styled.header`
    padding:5px;
    border-bottom: 1px solid black;
    display: flex;
`;
const CardHeaderImg = styled.img`
    padding:5px;
    border-bottom: 1px solid black;
    display: flex;
    height: 50px;
    width: 50px;
    border-radius: 30px;
    margin-right: 10px;

`;

const Icon = styled.p`
    text-align: start;
    margin: 5px;
    padding: 5px;
`;

const Likes = styled.p`
    text-align: start;

`;

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
        //this doesn't work completely 
        addLike = (post) =>{
                const {likes} = post;
                this.setState({likes: '401'})
        }
        
        render(){
            
    return(
        <div>
            <CardHeader>
                <CardHeaderImg src={this.props.passedArray.thumbnailUrl} alt=''/>
                <p>{this.props.passedArray.username}</p>
            </CardHeader>
            
            <img src={this.props.passedArray.imageUrl} alt=''/>
            <Icon> 
                <i className="far fa-heart" onClick={()=>this.addLike(this.state.likes)}></i>
                <i className="far fa-comment"></i>
            </Icon>
            <Likes>{this.state.likes} Likes</Likes>

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

