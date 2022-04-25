import React, { useEffect, useState } from 'react';
import './style.css';
import successSVG from '../../icon/successSVG.svg';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllClientOrders } from '../../redux/orders';
import { useNavigate } from 'react-router-dom';
import { userLogout } from '../../redux/user';
import auth, { userAuth } from '../../redux/auth';

const Success = () => {

    const state = useSelector(state => state.orders);
    const [time, setTime] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const sumTime = (total, item) => {
        return total += item.totalTime;
    }

    const logout = () => {
        localStorage.removeItem('token');
        dispatch(userLogout([]));
        dispatch(userAuth(false));
    }

    useEffect(() => {
        setTime(state.reduce(sumTime, 0));
        // clean the orders of the client from state
        dispatch(removeAllClientOrders());
    }, [])

    return(
        <div className='success-page'>
            <div className='success-rectangle'>
                <img src={successSVG} alt='svg'></img>
                <h3>Payment approved</h3>
                <h3>Your orders will be prepared and delivered in {time} minutes</h3>
                <div className='success-btn-container'>
                    <button className='success-btn' onClick={() => navigate('/menu')}>Menu</button>
                    <button className='success-btn' onClick={() => {navigate('/'); logout()}}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Success;