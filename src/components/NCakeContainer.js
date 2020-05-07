import React, {useState} from 'react'
import { connect } from 'react-redux'
import { buyCake, stockCake } from '../redux'

function NCakeContainer(props) {

    const [number,setNumber] = useState(1)
    return (
        <div>
            <h2>Number of Cakes {props.numOfCakes} </h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)}></input>
            <button onClick={() => props.buyCake(number)}>Buy N Cakes</button>
           {/*  <button onClick={props.stockCake}>Stock Cake</button> */}
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
        buyCake: (number) => dispatch(buyCake(number)),
        stockCake: () => dispatch(stockCake()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NCakeContainer)
