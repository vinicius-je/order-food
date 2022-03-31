import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuItems } from '../../redux/thunk';
import './style.css';
import Backgound from '../background';

import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';

const Menu = () => {
    const menuItems = useSelector(state => state.menu);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMenuItems());
    }, [])

    return(
        <div className='main-page'>  
            <Backgound/>
            <SearchBar/>
            <div className='container'>
                {menuItems.map((item, index) => <Card item={item} index={index} key={index}></Card>)}
            </div>
        </div>
    )
}

export default Menu;