import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function HooksCakeContainer() {
    const cakeCount = useSelector(state => state.cake.numOfCakes)
    const iceCount = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number of Cakes -{cakeCount}</h1>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>


            <h1>Number of IceCream -{iceCount}</h1>
            <button onClick={() => dispatch(buyIceCream())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
