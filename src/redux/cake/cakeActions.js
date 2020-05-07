import { BUY_CAKE, STOCK_CAKE } from './cakeTypes'

export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}

export const stockCake = () => {
    return {
        type: STOCK_CAKE
    }
}