import React from 'react';
import './style.css';
import { categoryOptions } from '../../options';
import SearchBar from '../SearchBar';

const CategoriesNav = ({setCategory, onChange}) => {    
    return(
        <header className='categories-header'>
            <nav className='categories-nav'>
                <ul className='categories-nav-ul'>
                    {categoryOptions.map((category) => (
                        <li onClick={() => setCategory(category.value)} key={category.value}>{category.name}</li>
                    ))}
                </ul>
                <SearchBar onChange={onChange}/>
            </nav>
        </header>
    )
}

export default CategoriesNav;
