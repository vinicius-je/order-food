import React from 'react'
import { useSelector } from 'react-redux'
import '../menu_container/style.css'

import Card from '../../components/Card'

export default function Edit(){

    const state = useSelector(state => state.menu)

    return(
        <div className='container'>
            {state.map((item, index) => <Card key={index} index={index} item={item}></Card>)}
        </div>
    )
}