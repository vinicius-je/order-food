
const totalValue = (price, quantity) => {
    return price * quantity
}

export function createOrder(id, name, url, price, quantity) {
    return{
        id,
        name,
        url,
        price,
        quantity,
        value: totalValue(price, quantity)
    }
}

