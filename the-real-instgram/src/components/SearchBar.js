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
            </form>
        </React.Fragment>
    )
}
export default SearchBar;