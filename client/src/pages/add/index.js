import React, { useState } from 'react' ;
import { useSelector } from 'react-redux';
import Form from '../../components/Form';
import { postNewMenuItem } from '../../redux/thunk';
import Alert from '../../components/Alert';
import './style.css';

export default function Add(){

    const [form, setForm] = useState({url: '', name: '', description: '', price: 0});
    const alert = useSelector(state => state.alert);

    return(
        <div className='add-page-container'>
            {alert.show ? <Alert value='Item added'/> : <></>}
            <h2 className='add-menu-title'>New menu item</h2>
            <Form form={form} setForm={setForm} callback={postNewMenuItem} btnValue='Send'></Form>
        </div>
    )
}