import React, { Component } from 'react';
import PostPage from './components/PostsPage';
import withAuthenticate from './Authentication/withAuthentication'
import styled, { css } from 'styled-components';
import './components/PostPage.css';
const ComponentFromWithAuthenticate = withAuthenticate(PostPage)

const DivApp = styled.div`
  text-align: center;
  margin: 10px;
  padding: 10px;
`;

class App extends Component {
state = {
  loggedIn: true
}
toggleComponent = ()=>{
  if(!this.state.loggedIn){
    localStorage.setItem('loggedIn',true)
  }else{
    localStorage.removeItem('loggedIn');
  }
  this.setState({showFirst: !this.state.loggedIn})
}

  render() {
    return (
      <DivApp>
          <ComponentFromWithAuthenticate />
      </DivApp>
    );
  }
}


export default App;
