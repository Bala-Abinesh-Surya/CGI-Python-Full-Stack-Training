import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container py-4">
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Welcome to Bibliophyte!</h1>
          <p className="col-md-8 fs-4">
            We have lots and lots of books from different authors and all genres, from all over the world!
          </p>
          <Link to="/books" className="btn btn-primary btn-lg">
            All Books
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
