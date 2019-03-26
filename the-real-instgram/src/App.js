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
  
  addSearch=event=>{
    event.preventDefault();
    console.log('handle input firing');
  }

  addComment=event=>{
    console.log('addComment is firing')
    event.preventDefault();

    const newComment = {
      text: this.state.commentInput,
      username: 'anonymous'
    }

  }
  addLike = () =>{
    console.log('like button firing')
  }
  render() {
    return (
      <div className="App">
        <SearchBar handleInput={this.addSearch}/>
        <PostContainer array={this.state.stateArray} addLike={this.addLike} addComment={this.addComment}/>
      </div>
    );
  }
}

export default App;
