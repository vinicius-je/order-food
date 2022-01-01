import React, { useState } from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import Form from '../../components/Form'
import { postNewMenuItem } from '../../redux/thunk'
import Alert from '../../components/Alert'
import './style.css'

export default function Add(){

    const [form, setForm] = useState({url: '', name: '', description: '', price: 0});
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();
    // set form data based in input name
    function formChange(e){
        setForm({...form, [e.target.name]: e.target.value});
    }
    // send data to backend
    function onSubmit(e){
        e.preventDefault();
        dispatch(postNewMenuItem(form));
        setForm({url: '', name: '', description: '', price: 0});
    }

    return(
        <>
        {alert.show ? <Alert value='Item added'/> : <></>}
        <h3 className='add-menu-title'>Add a new menu item</h3>
        <Form onSubmit={onSubmit} form={form} formChange={formChange} btn_value='Send'></Form>
        </>
    )
}