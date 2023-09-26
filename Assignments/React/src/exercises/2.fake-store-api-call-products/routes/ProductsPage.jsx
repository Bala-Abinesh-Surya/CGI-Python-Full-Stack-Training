import { Component } from "react"

import axios from "axios"

// components
import Product from "../components/Product"

export default class ProductsPage extends Component{
    constructor(props){
        super(props)

        this.state = {
            products: []
        }
    }

    // rendered after the components gets rendered
    async componentDidMount(){    
        const response = await axios.get('https://fakestoreapi.com/products')
        this.setState({products: response.data})
    }

    render(){
        return (
            <div className="container">
                <h3 className="text-center mt-3 mb-5">Products</h3>
                <p className="text-center" style={{display: this.state.products.length === 0 ? 'block' : 'none'}}>Loading....</p>
                <div class="row">
                    {
                        this.state.products.map((product) => <Product key={product.id} product={product} />)
                    }
                </div>
            </div>
        )
    }
}