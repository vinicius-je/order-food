import { addAlert, removeAlert } from "../alert"
import { userAuth } from "../auth";
import { addNewMenuItem, deleteMenuItem, editMenuItem, getMenuItems } from "../menu"
import { userData } from "../user"

const getToken = () => {
    const user = JSON.parse(localStorage.getItem('token'));
    return user !== null ? user.token : user;
}

export const fetchMenuItems = () => {
    return dispatch => {
        const options = {headers: {'authorization-token': getToken()}}
        fetch('menu/items', options)
            .then(res => res.json())
            .then(data => dispatch(getMenuItems(data)))
            .catch(console.log)
    }
}

export const postNewMenuItem = (item) => {
    return dispatch => {
        const options = {
            method: 'POST',
            headers: {
                'authorization-token': getToken(),
                'Content-Type':'application/json; charset=utf-8'
            },
            body: JSON.stringify(item)
        }
        fetch('menu/add', options)
            .then(res => res.json())
            .then(doc => {
                dispatch(addNewMenuItem(doc));
                dispatch(addAlert());
                setTimeout(() => dispatch(removeAlert()), 3000);
            })
            .catch(console.log)

    }
}

export const editItem = (item) => {
    return dispatch => {
        const options = {
            method: 'PUT',
            headers: {
                'authorization-token': getToken(),
                'Content-Type':'application/json; charset=utf-8'
            },
            body: JSON.stringify(item)
        }
        fetch(`menu/edit/${item._id}`, options)
            .then(res => res.json())
            .then(doc => {
                dispatch(editMenuItem(doc));
                dispatch(addAlert());
                setTimeout(() => dispatch(removeAlert()), 3000);
            })
            .catch(console.log)
    }
}

export const deleteItem = (id) => {
    return dispatch => {
        const options = {
            method: 'DELETE',
            headers: {
                'authorization-token': getToken(),
            },
        }
        fetch(`menu/delete/${id}`, options)
            .then(res => res.json())
            .then(doc => dispatch(deleteMenuItem(doc._id)))
            .catch(console.log)
    }
}

export const auth = (data, login) => {

    const URL = login ? 'user/login' : 'user/register'

    return dispatch => {
        const options = {
            method: 'POST',
            headers: {'Content-Type':'application/json; charset=utf-8'},
            body: JSON.stringify(data)
        }
        fetch(URL , options)
            .then(res => res.json())
            .then(data => {
                dispatch(userData(data));
                localStorage.setItem('token', JSON.stringify(data));
                dispatch(userAuth(true));
            })
            .catch((error) => {
                if(error){login ? alert('Email or password invalid') : alert('Email already in use')}
            })
    }
}
