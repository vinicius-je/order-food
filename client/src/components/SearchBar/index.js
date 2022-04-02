import React from 'react';
import './style.css';

const SearchBar = (props) => {
    const search = props.onChange;
    return(
        <div className='search-bar-container'>
            <input type='text' name='search' className='search-input' placeholder='Search for a dish' onChange={search}></input>
            <button className='search-btn'><i class="fas fa-search"></i></button>
        </div>
    )
}

export default SearchBar;