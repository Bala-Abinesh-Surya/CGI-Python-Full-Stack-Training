import { Component } from "react"

import axios from "axios"

export default class OffersPage extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            products: []
        }
    }

    // executed only after the components gets rendered
    componentDidMount(){
        axios.get('https://fakestoreapi.com/products')
            .then((response) => this.setState({products: response.data}))
    }

    render(){
        return (
            <div className="container">
                <h3 className="text-center mt-3 mb-5">Offers</h3>
                <p className="text-center" style={{display: this.state.products.length === 0 ? 'block' : 'none'}}>Loading....</p>
                <div className="row">
                    {
                        this.state.products.map((product) => (
                            <div className="col">
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={product.image} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text text-center"><strong>Price: Rs.{product.price}</strong></p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}