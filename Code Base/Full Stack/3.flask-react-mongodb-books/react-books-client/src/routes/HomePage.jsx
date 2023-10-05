import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [books, setBooks] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.log(error));
  }, [reload]);

  const deleteBook = (bookId) => {
    axios
      .delete(`http://127.0.0.1:5000/books/delete-book/${bookId}`)
      .then((response) => alert(response.data.message));

    setReload(!reload);
  };

  return (
    <div className="container">
      <h3 className="text-center mt-3">All Books</h3>
      {books.length != 0 ? (
        <div className="row mt-2 row-cols-1 row-cols-md-4 g-4">
          {books.map((book) => (
            <div className="col" key={book["_id"]}>
              <div className="card h-100" style={{ width: "18rem" }}>
                <img
                  src={book["image"]}
                  className="card-img-top"
                  alt="Book Cover Image"
                />
                <div className="card-body">
                  <h5 className="card-title">{book["name"]}</h5>
                  <p className="card-text">{book["description"]}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{book["author"]}</li>
                  <li className="list-group-item">
                    <strong>{`Rs.${book["price"]}/-`}</strong>
                  </li>
                </ul>
                <div className="card-body">
                  <Link
                    to={`/update-book/${book["_id"]}`}
                    className="btn btn-primary card-link"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger card-link"
                    onClick={() => deleteBook(book["_id"])}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default HomePage;
