import React, { Component } from 'react';
import PostPage from './components/PostsPage';
import withAuthenticate from './Authentication/withAuthentication'

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)


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
      <div className="App">
          <ComponentFromWithAuthenticate />
      </div>
    );
  }
}


export default App;
