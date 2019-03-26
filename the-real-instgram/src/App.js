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
      searchInput: '',
      commentInput: ''
    }
  }
  componentDidMount(){
    console.log('component mounted:')
    this.setState({
      stateArray: dummyData
    })
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer array={this.state.stateArray} />
      </div>
    );
  }
}

export default App;
