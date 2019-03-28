import React from 'react'

const SearchBar = props =>{
    console.log(props.passedArray)
    return(
        <React.Fragment>
           
            <form className='searchBox'>
            <i className="fab fa-instagram"></i>
                <input 
                    className='searchInput'
                    placeholder='search posts....'
                    onChange={props.handleSearchInput}
                />
                <i className="far fa-user"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-compass"></i>
            </form>
        </React.Fragment>
    )
}
export default SearchBar;