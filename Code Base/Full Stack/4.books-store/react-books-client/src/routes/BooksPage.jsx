import axios from "axios";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

function BooksPage({ bookId }) {
  const [books, setBooks] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/books")
      .then((response) => setBooks(response.data));
  }, [reload]);

  return (
    <div className="container">
      <h3 className="text-center my-3">All Books</h3>
      {books.length != 0 && (
        <div className="row">
          {books
            .filter((book) => book["_id"].includes(bookId))
            .map((book) => (
              <div className="col my-3" key={book["_id"]}>
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
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

const bindProps = (state) => ({ bookId: state.bookId });

export default connect(bindProps, null)(BooksPage);
