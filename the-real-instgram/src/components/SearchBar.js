import React from 'react'
import PropTypes from 'prop-types';

const SearchBar = props =>{
    return(
        <React.Fragment>
            <form>
                <input 
                type='text'
                placeholder='search'
                
                />
            </form>
        </React.Fragment>
    )
}
SearchBar.propTypes = {
    
}
export default SearchBar;