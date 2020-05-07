import React from 'react'
import { connect } from 'react-redux'
import { buyCake, stockCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes {props.numOfCakes} </h2>
            <button onClick={props.buyCake}>Buy Cake</button>
            <button onClick={props.stockCake}>Stock Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),
        stockCake: () => dispatch(stockCake()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
