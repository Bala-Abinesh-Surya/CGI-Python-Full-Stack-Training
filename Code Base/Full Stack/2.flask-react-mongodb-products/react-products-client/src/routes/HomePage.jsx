import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState(null);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/products")
      .then((response) => {
        setProducts(response.data);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, [reload]);

  const deleteProduct = (productId) => {
    axios
      .delete(`http://127.0.0.1:5000/delete-product/${productId}`)
      .then((response) => alert(response.data.message));

    setReload(!reload);
  };

  return (
    <div className="container">
      <h3 className="text-center mt-3 mb-3">All Products</h3>
      {products ? (
        <div className="row">
          {products.map((product) => (
            <div className="col" key={product["_id"]}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.category}</p>
                  <p className="card-text">
                    <strong>Rs.{product.price}/-</strong>
                  </p>
                  <Link
                    className="btn btn-primary me-3"
                    to={`/update-product/${product["_id"]}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteProduct(product["_id"])}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
}

export default HomePage;
