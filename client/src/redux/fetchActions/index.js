import { getMenuItems } from "../menu"

export const fetchMenuItems = () => {
    return dispatch => {
        fetch('/menu/items')
            .then(res => res.json())
            .then(doc => dispatch(getMenuItems(doc)))
            .catch(console.log)
    }
}