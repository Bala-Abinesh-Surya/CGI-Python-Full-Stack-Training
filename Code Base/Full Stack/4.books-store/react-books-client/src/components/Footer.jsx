export default function Footer() {
  return (
    <footer className="bg-black p-5 mt-5 mb-0 text-white text-center">
      <div className="my-5">
        <h3 className="text-center">Bibliophyte</h3>
        <div className="my-3 text-center">
          <span className="me-4" style={{ color: "#898989" }}>
            Home
          </span>
          <span className="me-4" style={{ color: "#898989" }}>
            All Books
          </span>
          <span className="me-4" style={{ color: "#898989" }}>
            Contact Us
          </span>
          <span className="me-4" style={{ color: "#898989" }}>
            Search
          </span>
        </div>
        <span className="my-2" style={{ color: "#595959" }}>
          Copyright &copy;2023 All Rights Reserved | Made in{" "}
          <span>&hearts;</span> by{" "}
          <span style={{ color: "#a3de83" }}>Bibliophyte.com</span>
        </span>
      </div>
    </footer>
  );
}
