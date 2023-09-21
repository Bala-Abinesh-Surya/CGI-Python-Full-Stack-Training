import { connect } from "react-redux";

function Counter({count, increment, decrement}){
    return (
        <>
            <button onClick={increment}>+</button>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
        </>
    )
}

// binding the count in the store's state with the count in the props
const bindStates = (state) => ({count: state.count})

// binding the action in the store's reducer with the props
const bindDispatch = (dispatch) => ({
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'})
})

export default connect(
    bindStates,
    bindDispatch
)(Counter)