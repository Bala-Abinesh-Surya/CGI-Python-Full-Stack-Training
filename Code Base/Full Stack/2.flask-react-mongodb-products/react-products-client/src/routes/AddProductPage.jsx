import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddProductPage() {
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    title: "",
    price: null,
    category: "",
    image: "",
  });

  const formOnChangeHandler = (event) => {
    event.preventDefault();

    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const formOnSubmitHandler = (event) => {
    event.preventDefault();

    // adding the product using axios post
    axios
      .post("http://127.0.0.1:5000/products", product)
      .then((response) => alert(response.data.message))
      .catch((error) => console.log(error));

    // clearing the product
    setProduct({
      title: "",
      price: null,
      category: "",
      image: "",
    });

    // navigating the user to the home page
    navigate('/')
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h3 className="text-center mt-3 mb-3">Add a Product</h3>
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
          Add Product
        </button>
        <button className="btn btn-danger" onClick={() => navigate('/')}>Cancel</button>
      </form>
    </div>
  );
}
