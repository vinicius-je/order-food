import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import Form from '../../components/Form'
import { editItem } from '../../redux/thunk'
import Alert from '../../components/Alert'
import './style.css'

export default function EditItem(){ 

    const state = useSelector(state => state.menu);
    const alert = useSelector(state => state.alert);
    const [form, setForm] = useState({url: '', name: '', description: '', price: 0});

    const params = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        // get the item id from url to add all information in form
        let paramsID = params.pathname.substring(1);
        state.forEach(element => {
            if(element._id === paramsID){
                const {_id, url, name, description, price} = element;
                setForm({_id, url, name, description, price});
            }
        });
    }, [state, params]) 
    // set form data based in input name
    function formChange(e){
        setForm({...form, [e.target.name]: e.target.value});
    }
    // send data to backend
    function onSubmit(e){
        e.preventDefault();
        dispatch(editItem(form));
        setForm({url: '', name: '', description: '', price: 0})
    }

    return(
        <div className='edit-item-page-container'>
            {alert.show ? <Alert value='Item edited'/> : <></>}
            <h3 className='edit-menu-item'>Edit menu item</h3>
            {form !== '' ? <Form onSubmit={onSubmit} form={form} formChange={formChange} btn_value='Edit'/> : 'carregando' }
        </div>
    )
}