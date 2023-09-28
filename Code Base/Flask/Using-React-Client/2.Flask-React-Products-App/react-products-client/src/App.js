import { useEffect, useState } from "react";
import axios from "axios"

function App() {
  const [products, setProducts] = useState([])

  // dependency array must be declared
  // though there is no dependency (runs only one time when the component mounts)
  // if not declared, useEffect will run in an infinite loop
  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/')
      .then((response) => setProducts(response.data))
  }, [])

  return (
    <div className="col-md-6 offset-md-3">
      <h3 className="text-center mt-3 mb-3">All Products</h3>
      {products.length != 0 && (
        <table className="table table-hover table-striped table-bordered">
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
        </table>
      )}
    </div>
  );
}

export default App;
