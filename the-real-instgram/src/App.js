import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data-two'
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';
import CommentSection from './components/CommentSection';

class App extends Component {
  constructor(){
    super();
    this.state = {
      stateArray: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <PostContainer />
        <SearchBar />
        <CommentSection />
      </div>
    );
  }
}

export default App;
