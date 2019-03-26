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
  handleChange=event=>{
    console.log(event.target.value)

    this.setState({
      commentInput: event.target.value
    })
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
    

  }
  addLike = () =>{
    console.log(this.state.stateArray[0].likes)
  }
  render() {
    return (
      <div className="App">
        <SearchBar handleInput={this.addSearch}/>
        <PostContainer 
          searchInput={this.state.commentInput} 
          handleChange={this.handleChange}  
          array={this.state.stateArray} 
          addLike={this.addLike} 
          addComment={this.addComment}/>
      </div>
    );
  }
}

export default App;
