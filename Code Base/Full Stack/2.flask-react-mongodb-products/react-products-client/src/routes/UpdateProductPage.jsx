import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UpdateProductPage() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/product/${productId}`)
      .then((response) => setProduct(response.data));
  }, []);

  const formOnChangeHandler = (event) => {
    event.preventDefault();

    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const formOnSubmitHandler = (event) => {
    event.preventDefault();

    // using dynamic url and also passing data in the body of the request
    axios
      .put(`http://127.0.0.1:5000/update-product/${productId}`, {
        title: product["title"],
        price: product["price"],
        category: product["category"],
      })
      .then((response) => alert(response.data.message));

    // navigating the user to the home page
    navigate('/')
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h3 className="text-center mt-3 mb-3">Add a Product</h3>
      {product && (
        <form
          className="form"
          onChange={formOnChangeHandler}
          onSubmit={formOnSubmitHandler}
        >
          <div className="mb-3">
            <label htmlFor="productNameInput" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productNameInput"
              placeholder="Enter product name"
              name="title"
              value={product.title}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productCategory" className="form-label">
              Product Category
            </label>
            <input
              type="text"
              className="form-control"
              id="productCategory"
              placeholder="Enter product category"
              name="category"
              value={product.category}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              placeholder="Enter product price"
              name="price"
              value={product.price}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ImageUrl" className="form-label">
              Product Image URL
            </label>
            <input
              type="text"
              className="form-control"
              id="ImageUrl"
              placeholder="Enter product URL"
              name="image"
              value={product.image}
              required
            />
          </div>
          <button className="btn btn-success me-3" type="submit">
            Update Product
          </button>
          <button className="btn btn-danger" onClick={() => navigate("/")}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}
