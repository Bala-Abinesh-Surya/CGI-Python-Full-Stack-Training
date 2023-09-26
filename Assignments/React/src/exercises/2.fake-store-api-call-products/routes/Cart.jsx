import { connect } from "react-redux"

import Product from "../components/Product"

function Cart({cart}){
    return (
        <div className="container">
            <h3 className="text-center m-4">Cart</h3>
            {cart.length != 0 ? (
                <div className="row" style={{'float': 'left'}}>   
                    {cart.map((product) => <Product key={product.id} product={product} />)}
                </div>
            ) : <p className="text-center">No items in the cart</p>}
        </div>
    )
}

const bindProps = (state) => ({cart: state.cart})

const bindActionDispatch = (dispatch) => ({})

export default connect(
    bindProps,
    bindActionDispatch
)(Cart)