import React, { useEffect, useState } from 'react'; 
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { createOrder } from '../../model/orderModel';
import { getClientOrder } from '../../redux/orders';
import { deleteItem } from '../../redux/thunk';
import { showCartSideBar } from '../../redux/cart';
import './style.css';
import { motion } from 'framer-motion/dist/framer-motion';

const Card = (props) => {

    const path = useLocation();
    const [editPage, setEditPage] = useState(false);

    const index = props.index;
    const {_id, name, url, description, price, time, portion} = props.item;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // check the pathname to display or not the edit buttons on card
    useEffect(() => {
        path.pathname === '/edit' ? setEditPage(true) : setEditPage(false);
    }, [path])

    const addItem = (item) =>{
        const {_id, name, url, price, quantity, time, portion} = item;
        const order = createOrder(_id, name, url, price, quantity, time, portion);
        dispatch(getClientOrder(order));
    }

    return(
        <motion.div layout className='card-container'>
            <div className='card'>
                {/* <h4 className='number'>Nº{index + 1}</h4> */}
                <div className='card-img'>
                    <img src={url} alt={name}></img>
                </div>
                <div className='card-body'>
                    <h3 className='name'>{name}</h3>
                    <div className='description-box'>
                        <h4>Description</h4>
                        <p className='description'>{description}</p>
                    </div>
                    <div className='card-flex-box'>
                        <div className='card-box'>
                            <h4>Time</h4>
                            <p>{time} min</p>
                        </div>
                        <div className='card-box'>
                            <h4>Portion</h4>
                            <p>{portion} person</p>
                        </div>
                        <div className='card-box'>
                            <h4>Price</h4>
                            <p className='price'>$ {price.toFixed(2)}</p>
                        </div>
                    </div>
                    {editPage === false ? <button className='order-btn btn' onClick={() => {addItem({...props.item, quantity: 1}); dispatch(showCartSideBar())}}>order</button> : 
                    <div className='edit-btn-container'>
                        <button className='btn edit-btn' onClick={() => navigate(`/${_id}`)}>edit</button>
                        <button className='btn delete-btn' onClick={() => dispatch(deleteItem(_id))}>delete</button>
                    </div>}
                </div>
            </div>
        </motion.div>
    )
}


export default Card;