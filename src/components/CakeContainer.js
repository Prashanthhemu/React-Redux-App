import React, { useState } from 'react'
import { buyCake, buyIceCream } from '../redux'
import { connect } from 'react-redux'

function CakeContainer(props) {
    const [cakeCount, setCakeCount] = useState(1)
    return (
        <div>
            <h2>Number Of Cakes {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>

            <h2>Number Of IceCream {props.numOfIceCreams}</h2>
            <input value={cakeCount} onChange={e => setCakeCount(e.target.value)}></input>
            <button onClick={() => props.buyIceCreams(cakeCount)}>Buy {cakeCount} IceCream</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        numOfCakes: state.cake.numOfCakes,
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),
        buyIceCreams: cakeCount => dispatch(buyIceCream(cakeCount))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
