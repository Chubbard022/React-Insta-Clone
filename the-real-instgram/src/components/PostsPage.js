import React from 'react'
import styled, { css } from 'styled-components';
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
        event.preventDefault()
        console.log(event.target.value)
      }
      filterSearch = post =>{
        post.preventDefault()
        console.log('filter')
      }
      render() {
        console.log(this.state.stateArray)
        return (
          <div>
            <SearchBar 
              searchInput={this.state.searchInput}
              handleSearchInput={this.handleSearchInput}
              filterSearch={this.filterSearch}
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