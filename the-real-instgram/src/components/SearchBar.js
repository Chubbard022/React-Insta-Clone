import React from 'react'
import styled, { css } from 'styled-components';
import './PostPage.css';


const SearchBox = styled.form`
    border-bottom: 1px solid black;
`;
const SearchInput = styled.input`
    border: 1px solid black;
    margin: 5px;
    font-size: 20px;
`;

const SearchBar = props =>{
    return(
        <React.Fragment>
           
            <SearchBox onSubmit={props.filterSearch}>
            <i className="fab fa-instagram"></i>
                <SearchInput 
                    
                    placeholder='search posts....'
                    onChange={props.handleSearchInput}
                    name='searchInput'
                    type='text'
                    value={props.searchInput}
                />
                <i className="far fa-user"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-compass"></i>
            </SearchBox>
        </React.Fragment>
    )
}
export default SearchBar;