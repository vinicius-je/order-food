
export const getMenuItems = async () => {
    await fetch('http://localhost:4000/menu/items')
        .then(console.log)
        .catch(console.log)
}