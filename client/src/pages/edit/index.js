import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../menu_container/style.css';

import Card from '../../components/Card'
import { fetchMenuItems } from '../../redux/thunk'

const Edit = () => {

    const state = useSelector(state => state.menu);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMenuItems());
    }, [dispatch])

    return(
        <div className='container'>
            {state.map((item, index) => <Card key={index} index={index} item={item}></Card>)}
        </div>
    )
}

export default Edit;