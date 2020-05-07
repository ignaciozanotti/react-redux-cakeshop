import React from 'react'
import {connect} from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props) {
    return (
        <div>
            <h2>ItemTag:{props.tag} {props.item}</h2>
            <button onClick={props.buyItem}> Buy Item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ?
    state.cake.numOfCakes : state.iceCream.numOfIceCreams

    const tagState = ownProps.cake ?
    'cakes': 'icecreams'

    return {
        item: itemState,
        tag: tagState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ?
    () => dispatch(buyCake()) : () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
