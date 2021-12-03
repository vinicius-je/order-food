import React, { useState } from 'react' 
import { useDispatch } from 'react-redux'
import Form from '../../components/Form';
import { postNewMenuItem } from '../../redux/fetchActions';

export default function Add(){

    const [form, setForm] = useState({url: '', name: '', description: '', price: 0})
    const dispatch = useDispatch()

    function formChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    function onSubmit(e){
        e.preventDefault();
        console.log(form);

        dispatch(postNewMenuItem(form))
        setForm({url: '', name: '', description: '', price: 0})
    }

    return(
        <Form onSubmit={onSubmit} form={form} formChange={formChange}></Form>
    )
}