import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateBookPage() {
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const { bookId } = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/books/${bookId}`)
      .then((response) => setBook(response.data));
  }, []);

  const goToHome = () => {
    navigate("/");
  };

  const formOnChangeHandler = (event) => {
    event.preventDefault();

    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const formOnSubmitHandler = (event) => {
    event.preventDefault();

    axios.put(`http://127.0.0.1:5000/books/update-book/${bookId}`, book)
      .then((response) => alert(response.data.message))

    // navigating the user to the home page
    goToHome()
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h4 className="text-center mt-3">Update the book</h4>
      {book && (
        <form
          className="form mt-4"
          onChange={formOnChangeHandler}
          onSubmit={formOnSubmitHandler}
        >
          <div className="mb-3">
            <label htmlFor="bookName" className="form-label">
              Name of the book
            </label>
            <input
              type="text"
              className="form-control"
              id="bookName"
              placeholder="Enter book name"
              name="name"
              value={book.name}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bookAuthor" className="form-label">
              Name of the author
            </label>
            <input
              type="text"
              className="form-control"
              id="bookAuthor"
              placeholder="Enter book author name"
              name="author"
              value={book.author}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="authorName" className="form-label">
              Book price
            </label>
            <input
              type="number"
              className="form-control"
              id="authorName"
              placeholder="Enter the price"
              name="price"
              value={book.price}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Enter the description"
              name="description"
              value={book.description}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bookImageUrl" className="form-label">
              Image url of the book
            </label>
            <input
              type="text"
              className="form-control"
              id="bookImageUrl"
              placeholder="Paste Image URL"
              name="image"
              value={book.image}
              required
            />
          </div>
          <button className="btn btn-primary me-3" type="submit">
            Update Book
          </button>
          <button className="btn btn-danger" onClick={goToHome}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}
