import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

// components
import Product from "../components/Product"

export default function ProductPage(){
    const [product, setProduct] = useState({})
    const {number} = useParams('number')

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${number}`)
            .then((response) => setProduct(response.data))
    }, [number])

    return (
        <div className="col-md-3 offset-md-3">
            {product && <Product product={product} />}
        </div>
    )
}