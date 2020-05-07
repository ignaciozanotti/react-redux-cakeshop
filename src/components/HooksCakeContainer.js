import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buyCake, stockCake} from '../redux'

function HooksCakeContainer() {

    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
     
    return (
        <div>
            <h2>Hooks Based Num of Cakes { numOfCakes }</h2>
            <button onClick={() => dispatch(buyCake())}> Buy Cake </button>
            <button onClick={() => dispatch(stockCake())}> Stock Cake </button>
        </div>
    )
}

export default HooksCakeContainer
