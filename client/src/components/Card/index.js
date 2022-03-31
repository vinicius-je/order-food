import React, { useEffect, useState } from 'react'; 
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { createOrder } from '../../model/orderModel';
import { getClientOrder } from '../../redux/orders';
import { deleteItem } from '../../redux/thunk';
import { showCartSideBar } from '../../redux/cart';
import './style.css';

const Card = (props) => {

    const path = useLocation();
    const [editPage, setEditPage] = useState(false);

    const index = props.index;
    const {_id, name, url, description, price} = props.item;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // check the pathname to display or not the edit buttons on card
    useEffect(() => {
        path.pathname === '/edit' ? setEditPage(true) : setEditPage(false);
    }, [path])

    const addItem = (item) =>{
        const {_id, name, url, price, quantity} = item;
        const order = createOrder(_id, name, url, price, quantity);
        dispatch(getClientOrder(order));
    }

    return(
        <div className='card-container'>
            <div className='card'>
                <h4 className='number'>Nº{index + 1}</h4>
                <img src={url} alt={name}></img>
                <h3 className='name'>{name}</h3>
                <p className='description'>{description}</p>
                <h3 className='price'>$ {price.toFixed(2)}</h3>
                {editPage === false ? <button className='order-btn btn' onClick={() => {addItem({...props.item, quantity: 1}); dispatch(showCartSideBar())}}>order</button> : 
                <div className='edit-btn-container'>
                    <button className='btn edit-btn' onClick={() => navigate(`/${_id}`)}>edit</button>
                    <button className='btn delete-btn' onClick={() => dispatch(deleteItem(_id))}>delete</button>
                </div>}
            </div>
        </div>
    )
}


export default Card;