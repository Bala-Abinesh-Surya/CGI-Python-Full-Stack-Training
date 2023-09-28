import { useState, useEffect } from "react"

import axios from "axios"

function App() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/')
      .then((response) => setProducts(response.data))
  }, [])

  return (
    <div className="col-md-6 offset-md-3">
      <h3 className="text-center mt-3">Fetching products from Django API</h3>
      {products.length != 0 && (
        <table className="table caption-bottom table-hover table-bordered table-hover table-striped mt-4">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
          <caption>List of products</caption>
        </table>
      )}
    </div>
  );
}

export default App;
