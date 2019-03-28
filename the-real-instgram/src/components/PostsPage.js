import React from 'react'
import './PostPage.css';

import dummyData from './dummy-data-two'
import PostContainer from './PostContainer';
import SearchBar from './SearchBar';

class PostPage extends React.Component{
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

      handleSearchInput=event=>{    
       
}
      render() {
        return (
          <div className="App">
            <SearchBar 
             searchInput={this.state.searchInput}
             handleSearchInput={this.handleSearchInput}
             />
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
    
export default PostPage;