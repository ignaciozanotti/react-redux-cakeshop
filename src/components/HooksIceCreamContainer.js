import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buyIceCream, stockIceCream} from '../redux'

function HooksIceCreamContainer() {

    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
     
    return (
        <div>
            <h2>Hooks Based Num of IceCreams { numOfIceCreams }</h2>
            <button onClick={() => dispatch(buyIceCream())}> Buy IceCream </button>
            <button onClick={() => dispatch(stockIceCream())}> Stock IceCream </button>
        </div>
    )
}

export default HooksIceCreamContainer
