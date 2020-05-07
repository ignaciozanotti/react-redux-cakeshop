import { BUY_ICECREAM, STOCK_ICECREAM } from './iceCreamTypes'

export const buyIceCream = () => {
    return {
        type: BUY_ICECREAM
    }
}

export const stockIceCream = () => {
    return {
        type: STOCK_ICECREAM
    }
}