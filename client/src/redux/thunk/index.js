import { addNewMenuItem, deleteMenuItem, editMenuItem, getMenuItems } from "../menu"
import { userLogin } from "../user"

const getToken = () => {
    const {token} = JSON.parse(localStorage.getItem('token'))
    return token;
}

export const fetchMenuItems = () => {
    return dispatch => {
        const options = {
            headers: {'authorization-token': getToken()}
        }
        fetch('menu/items', options)
            .then(res => res.json())
            .then(doc => dispatch(getMenuItems(doc)))
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
            .then(doc => dispatch(addNewMenuItem(doc)))
            .catch(console.log)

    }
}

export const editItem = (item) => {
    return dispatch => {
        const options = {
            method: 'PUT',
            headers: {'Content-Type':'application/json; charset=utf-8'},
            body: JSON.stringify(item)
        }

        fetch(`menu/edit/${item._id}`, options)
            .then(res => res.json())
            .then(doc => dispatch(editMenuItem(doc)))
            .catch(console.log)
    }
}

export const deleteItem = (id) => {
    return dispatch => {
        const options = {
            method: 'DELETE'
        }
        fetch(`menu/delete/${id}`, options)
            .then(res => res.json())
            .then(doc => dispatch(deleteMenuItem(doc._id)))
            .catch(console.log)
    }
}

// user actions
export const userAuth = (data, login) => {

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
                dispatch(userLogin(data));
                localStorage.setItem('token', JSON.stringify(data));
            })
            .catch(console.log)
    }
}
