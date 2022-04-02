import React from 'react';
import './style.css';
import { categories } from '../../categories';

const CategoriesNav = (props) => {
    const setCategory = props.category;

    const onClick = (number) => {
        setCategory(number);
    }
    
    return(
        <header className='categories-header'>
            <h1 className='categories-title'>Categories</h1>
            <nav className='categories-nav'>
                <ul className='categories-nav-ul'>
                    {categories.map((category) => (
                        <li onClick={() => onClick(category.value)} key={category.value}>{category.title}</li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default CategoriesNav;
