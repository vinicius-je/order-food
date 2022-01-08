import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import Form from '../../components/Form'
import { editItem } from '../../redux/thunk'
import Alert from '../../components/Alert'
import './style.css'

export default function EditItem(){ 

    const {menu, alert} = useSelector(state => state);
    const [form, setForm] = useState({url: '', name: '', description: '', price: 0});
    const params = useLocation();

    useEffect(() => {
        // get the item id from url to add all information in form
        let paramsID = params.pathname.substring(1);
        menu.forEach(element => {
            if(element._id === paramsID){
                const {_id, url, name, description, price} = element;
                setForm({_id, url, name, description, price});
            }
        });
    }, [menu, params]) 

    return(
        <div className='edit-item-page-container'>
            {alert.show ? <Alert value='Item edited'/> : <></>}
            <h3 className='edit-menu-item'>Edit menu item</h3>
            {form !== '' ? <Form form={form} setForm={setForm} callback={editItem} btnValue='Edit'/> : 'carregando' }
        </div>
    )
}