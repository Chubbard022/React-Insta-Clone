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
  //this function will set the task in an input field and set state to that input
  handleInputChanges=event=>{
    console.log('text added');
  }
  //this function adds whatever comment was added to the list of comments rendered
  addComment=event=>{
    console.log('addComment')
    event.preventDefault();

    const newComment = {
      text: this.state.commentInput,
      username: 'anonymous'
    }
    this.setState({
      stateArray:[...this.state.stateArray, newComment]
    })

  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer array={this.state.stateArray} addComment={this.addComment}/>
      </div>
    );
  }
}

export default App;
