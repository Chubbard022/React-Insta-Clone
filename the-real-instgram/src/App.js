import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data-two'
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      stateArray: [],
      searchInput: ''
    }
  }
  componentDidMount(){
    this.setState({
      stateArray: dummyData
    })
  }
  render() {
    return (
      <div className="App">
        <SearchBar handleInput={this.addSearch}/>
        <PostContainer 
          searchInput={this.state.commentInput} 
          handleChange={this.handleChange}  
          array={this.state.stateArray} 
          comments={this.state.stateArray.comments}
          addComment={this.addComment}/>
      </div>
    );
  }
}

export default App;
