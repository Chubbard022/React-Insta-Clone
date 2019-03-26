import React from 'react'

const SearchBar = props =>{
    return(
        <React.Fragment>
            <form className='searchBox'>
                <input 
                className='searchInput'
                type='text'
                placeholder='search'
                />
                <button>Search</button>
            </form>
        </React.Fragment>
    )
}
export default SearchBar;