import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuItems } from '../../redux/thunk';
import './style.css';
import Backgound from '../background';

import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import CategoriesNav from '../../components/CategoriesNav';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [category, setCategory] = useState();
    const menuItemsRedux = useSelector(state => state.menu);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMenuItems());
    }, [])

    useEffect(() => {
        setMenuItems(menuItemsRedux);
    }, [menuItemsRedux])

    useEffect(() => {
        filterCategory();
    }, [category])

    const filterCategory = () => {
        if(category === 0){
            setMenuItems(menuItemsRedux);
            return;
        }
        let menuItemFiltered = menuItemsRedux.filter(item => item.category === category);
        setMenuItems(menuItemFiltered);
    }

    return(
        <div className='main-page'>  
            <Backgound/>
            <SearchBar/>
            <CategoriesNav category={setCategory}/>
            <div className='container'>
                {menuItems.map((item, index) => <Card item={item} index={index} key={index}></Card>)}
            </div>
        </div>
    )
}

export default Menu;