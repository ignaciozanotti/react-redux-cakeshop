import React from 'react'
import {connect} from 'react-redux'

function ItemContainer(props) {
    return (
        <div>
            <h2>ItemTag:{props.tag} {props.item}</h2>
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

export default connect(mapStateToProps)(ItemContainer)
