import { addNewMenuItem, deleteMenuItem, getMenuItems } from "../menu"

export const fetchMenuItems = () => {
    return dispatch => {
        fetch('menu/items')
            .then(res => res.json())
            .then(doc => dispatch(getMenuItems(doc)))
            .catch(console.log)
    }
}

export const postNewMenuItem = (item) => {
    return dispatch => {
        const options = {
            method: 'POST',
            headers: {'Content-Type':'application/json; charset=utf-8'},
            body: JSON.stringify(item)
        }
        fetch('menu/add', options)
            .then(res => res.json())
            .then(doc => dispatch(addNewMenuItem(doc)))
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