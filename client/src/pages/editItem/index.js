import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Form from '../../components/Form';
import { editItem } from '../../redux/thunk';
import Alert from '../../components/Alert';
import './style.css';

const EditItem = () => { 

    const {menu, alert} = useSelector(state => state);
    const [form, setForm] = useState({url: '', name: '', description: '', price: 0, category: '', time: '', person: ''});

    const { id } = useParams();

    useEffect(() => {
        menu.forEach(element => {
            if(element._id === id){
                const {_id, url, name, description, price, category, time, person} = element;
                setForm({_id, url, name, description, price, category, time, person});
            }
        });
    }, [menu]) 

    return(
        <div className='edit-item-page-container'>
            {alert.show ? <Alert value='Item edited'/> : <></>}
            <h2 className='edit-menu-item'>Edit menu item</h2>
            {form !== '' ? <Form form={form} setForm={setForm} callback={editItem} btnValue='Edit'/> : 'carregando'}
        </div>
    )
}

export default EditItem;