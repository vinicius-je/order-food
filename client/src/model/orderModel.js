
const totalValue = (price, quantity) => {
    return price * quantity
}

export function createOrder(id, name, url, price, quantity, time, portion) {
    return{
        id,
        name,
        url,
        price,
        quantity,
        value: totalValue(price, quantity),
        time,
        portion
    }
}

