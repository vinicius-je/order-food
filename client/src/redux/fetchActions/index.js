
export const getMenuItems = async () => {
    await fetch('/menu/items')
        .then(res => res.json())
        .then(doc => console.log(doc))
        .catch(console.log)
}