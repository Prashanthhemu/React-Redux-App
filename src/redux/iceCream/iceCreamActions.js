import { BUY_ICECREAM } from './iceCreamTypes'

export const buyIceCream = (cakeCount = 1) => {
    return {
        type: BUY_ICECREAM,
        payload: cakeCount
    }
}