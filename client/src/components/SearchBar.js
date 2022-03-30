import React from 'react';
import './SearchBar.css';


export default function SearchBar(){
    return(
        <div className='search-bar-container'>
            <input type='text' name='search' className='search-input' placeholder='Search for a dish'></input>
            <button className='search-btn'><i class="fas fa-search"></i></button>
        </div>
    )
}