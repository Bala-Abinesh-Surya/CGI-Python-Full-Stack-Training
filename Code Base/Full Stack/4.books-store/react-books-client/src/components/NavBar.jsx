import { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar({bookId, modify}) {
  const navigate = useNavigate();
  
  const formOnChangeHandler = (event) => {
    event.preventDefault();

    modify(event.target.value);
  };

  const formOnSubmitHandler = (event) => {
    event.preventDefault();

    navigate(`/books/${bookId}`);
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Bibliophyte
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/books">
                All Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact-us">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <form
          class="d-flex"
          role="search"
          onSubmit={formOnSubmitHandler}
          onChange={formOnChangeHandler}
        >
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            required
            value={bookId}
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

const bindProps = (state) => ({
  bookId: state.bookId,
});

const bindActions = (dispatch) => ({
  modify: (bookId) => dispatch({ type: "MODIFY", newId: bookId }),
});

export default connect(bindProps, bindActions)(NavBar);
