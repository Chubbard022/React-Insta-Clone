import React from 'react'

const SearchBar = props =>{
    return(
        <React.Fragment>
           
            <form className='searchBox'>
            <i className="fab fa-instagram"></i>
                <input 
                className='searchInput'
                type='text'
                placeholder='search'
                />
                <button onClick={props.filterPosts}>Search</button>
                <i className="far fa-user"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-compass"></i>
            </form>
        </React.Fragment>
    )
}
export default SearchBar;