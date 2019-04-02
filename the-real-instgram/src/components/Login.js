import React from 'react';
import styled, { css } from 'styled-components';
import './PostPage.css';

const LoginDiv = styled.div`
    background-color: #C6B7B9;
    border: 1px solid black;
    width: 40%;
    box-shadow: 5px 5px 5px #D2D2D2;
    padding: 5px;
    margin: 0 auto;
    border-radius: 5px;
`;
const LoginInput = styled.input`
    margin: 5px;
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;

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
