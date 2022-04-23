const totalValue = (n1, n2) => {
    return n1 * n2
}

export function createOrder(id, name, url, price, quantity, time, portion) {
    return{
        id, name, url, price, quantity, portion, time,
        value: totalValue(price, quantity),
        totalTime: totalValue(time, quantity)
    }
}

