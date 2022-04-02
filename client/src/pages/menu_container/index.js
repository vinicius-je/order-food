import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuItems } from '../../redux/thunk';
import './style.css';
import Backgound from '../background';
import { motion } from 'framer-motion/dist/framer-motion';

import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import CategoriesNav from '../../components/CategoriesNav';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [category, setCategory] = useState(0);
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

    const search = (e) => {
        if (e.target.value === ''){
            setMenuItems(menuItemsRedux);
            return;
        }
        let value;
        let searchMenuItems = menuItemsRedux.filter((item) => {
            value = item.name.toLowerCase();
            if(value.includes(e.target.value.toLowerCase())){
                // if category is not defined return all menu items that matches with search input
                if(category === 0){
                    return item;
                }
                // if category is defined, just return the menu itens that matches with search input and category
                if(item.category === category){
                    return item;
                }
            }
        });
        setMenuItems(searchMenuItems);
    }

    return(
        <div className='main-page'>  
            <Backgound/>
            <SearchBar onChange={search}/>
            <CategoriesNav category={setCategory}/>
            <motion.div layout className='container'>
                {menuItems.map((item, index) => <Card item={item} index={index} key={index}></Card>)}
            </motion.div>
        </div>
    )
}

export default Menu;