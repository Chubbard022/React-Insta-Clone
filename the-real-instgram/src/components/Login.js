import React from 'react';

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            password: ''

        }
    }
    render(){
        return(
        <div>
            <form>
                    <input 
                        type='text'
                        placeholder='add username'
                        value={this.state.username}
                        onChange={this.props.usernameLogin}
                    />
                    <input 
                        type='text'
                        placeholder='add username'
                        value={this.state.password}
                        onChange={this.props.passwordLogin}
                    />
            </form>
            <button onClick={this.props.submitted}>Login To Instagram</button>
        </div>
            
        )
    }
  }

export default Login;


// usernameLogin={this.handleUsername} 
// passwordLogin={this.handlePassword}
// submitted={this/submitLogin}