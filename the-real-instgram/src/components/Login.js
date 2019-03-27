import React from 'react';

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            password: ''
        }
    }
    handleUsername= event =>{
        this.setState({
            username: event.target.value,
        })
    }
    handlePassword= event =>{
        this.setState({
            password: event.target.value,
        })
    }

    submitLogin=event=>{
        event.preventDefault();
        this.setState({
        })
    }


    render(){
        return(
        <div>
            <form>
                    <input 
                        placeholder='add username'
                        value={this.state.username}
                        onChange={this.handleUsername}
                    />
                    <input 
                        placeholder='add username'
                        value={this.state.password}
                        onChange={this.handlePassword}
                    />
            </form>
            <button onClick={this.submitLogin}>Login To Instagram</button>
        </div>
            
        )
    }
  }

export default Login;

// updateComments = event =>{
//     event.preventDefault();

//     const newComment = {
//         id: Date.now(),
//         text: this.state.commentInput,
//         username: 'anonymous'
//     }
//     this.setState({
//         comments: [...this.state.comments, newComment],
//         commentInput: ''
//     })
// }