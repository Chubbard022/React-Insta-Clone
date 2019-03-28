import React from 'react';
import styled, { css } from 'styled-components';
import './PostPage.css';

const LoginDiv = styled.div`
    background-color: #C6B7B9;
    border: 1px solid black;
    width: 50%;
`;
const LoginInput = styled.input`
    margin: 5px;
    padding: 5px;
    border: 1px solid black;
`;
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
        <LoginDiv>
            <form>
                    <LoginInput 
                        type='text'
                        placeholder='add username'
                        value={this.state.username}
                        onChange={this.props.usernameLogin}
                    />
                    <LoginInput 
                        type='text'
                        placeholder='add username'
                        value={this.state.password}
                        onChange={this.props.passwordLogin}
                    />
            </form>
            <button onClick={this.props.submitted}>Login To Instagram</button>
        </LoginDiv>
            
        )
    }
  }

export default Login;
