import { connect } from "react-redux"

function Product({product, addToCart}) {
    const { title, description, image, id } =  product

    const addItem = (event) => {
        event.preventDefault()

        // adding the item to the cart
        addToCart(product)
    }

    return (
        <div className="col">
            <div class="card" style={{ width: '18rem' }}>
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <button className="btn btn-primary" onClick={addItem}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

const bindProps = (state) => ({})

const bindActionDispatch = (dispatch) => ({
    addToCart: (product) => dispatch({type: 'ADD_ITEM', newProduct: product})
})

export default connect(
    bindProps,
    bindActionDispatch
)(Product)