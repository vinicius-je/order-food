import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import Form from '../../components/Form'
import { editItem } from '../../redux/thunk'

export default function EditItem(){ 
    const state = useSelector(state => state.menu)

    const [form, setForm] = useState({url: '', name: '', description: '', price: 0})

    const params = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        let paramsID = params.pathname.substring(1)

        state.forEach(element => {
            if(element._id === paramsID){
                const {_id, url, name, description, price} = element
                setForm({_id, url, name, description, price})
            }
        });
    }, [state, params]) 

    function formChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    function onSubmit(e){
        e.preventDefault()
        dispatch(editItem(form))
    }


    return(
        <div>
            {form !== '' ? <Form onSubmit={onSubmit} form={form} formChange={formChange}></Form> : 'carregando' }
        </div>
    )
}